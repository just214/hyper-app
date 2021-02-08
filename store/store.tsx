import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Block } from "../models";
import { createStore, Thunk, thunk, Action, action } from "easy-peasy";
import { UserProfile, ThemePreference } from "../models";

export interface StoreModel {
  // STATE
  authID: null | string;
  userProfile: UserProfile | null;
  blocks: Block[];
  // ACTIONS
  updateAuthID: Action<StoreModel, string>;
  updateUserProfile: Action<StoreModel, UserProfile>;
  fetchOrCreateUserProfile: Thunk<StoreModel>;
  addBlocks: Action<StoreModel, Block[]>;
  // THUNKS
  fetchBlocks: Thunk<StoreModel, undefined, undefined, StoreModel>;
  createBlock: Thunk<StoreModel, Block, undefined, StoreModel>;
  updateThemePreference: Thunk<
    StoreModel,
    ThemePreference,
    undefined,
    StoreModel
  >;
  updatePrimaryColorPreference: Thunk<
    StoreModel,
    string,
    undefined,
    StoreModel
  >;
}

export const store = createStore<StoreModel>({
  authID: null,
  userProfile: null,
  blocks: [],
  updateAuthID: action((state, payload) => {
    state.authID = payload;
  }),
  updateUserProfile: action((state, payload) => {
    state.userProfile = payload;
  }),
  fetchOrCreateUserProfile: thunk(async (actions, _) => {
    const user = await Auth.currentAuthenticatedUser();
    const authID = user.attributes.sub;

    // The user is authenticated, so let's save our authID to the store
    actions.updateAuthID(authID);

    // At this point, we don't know if a user profile exists
    // (temporary solution using withAuthenticator hook)

    // Check to see if a user profile exists for the authenticated user
    const userProfile = await DataStore.query(UserProfile, (userProfile) =>
      userProfile.authID("eq", authID)
    );

    const maybeUserProfile = userProfile[0] || null;

    if (maybeUserProfile) {
      // There is already a user profile, so let's go ahead and save it to the store and we are done
      console.log("Profile Exists");
      actions.updateUserProfile(maybeUserProfile);
    } else {
      // A user profile has not been created yet, so let's go ahead and create one now with some defaults
      await DataStore.save(
        new UserProfile({
          authID,
          theme_preference: ThemePreference.SYSTEM,
          primary_color_preference: "#2CB1BC", // cyan
          show_calendar_events: false,
          calendarIDs: [],
        })
      );
    }
    const subscription = DataStore.observe(UserProfile, (p) =>
      p.authID("eq", authID)
    ).subscribe((msg) => {
      actions.updateUserProfile(msg.element);
    });
  }),
  addBlocks: action((state, payload) => {
    state.blocks = payload;
  }),
  fetchBlocks: thunk(async (actions, _, { getStoreState }) => {
    const data = await DataStore.query(Block, (block) =>
      block.authID("eq", getStoreState().authID!)
    );
    actions.addBlocks(data);
    // const subscription = DataStore.observe(Block).subscribe((msg) => {
    //   console.log(msg.model, msg.opType, msg.element);
    // });
  }),
  createBlock: thunk(async (_, payload, { getStoreState }) => {
    const newBlock = await DataStore.save(
      new Block({
        ...payload,
        authID: getStoreState().authID!,
      })
    );
  }),
  updateThemePreference: thunk(async (_, payload, { getStoreState }) => {
    const original = await DataStore.query(
      UserProfile,
      getStoreState().userProfile?.id!
    );
    await DataStore.save(
      UserProfile.copyOf(original!, (updated) => {
        updated.theme_preference = payload;
      })
    );
  }),
  updatePrimaryColorPreference: thunk(async (_, payload, { getStoreState }) => {
    const original = await DataStore.query(
      UserProfile,
      getStoreState().userProfile?.id!
    );
    await DataStore.save(
      UserProfile.copyOf(original!, (updated) => {
        updated.primary_color_preference = payload;
      })
    );
  }),
});
