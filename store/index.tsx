import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Block } from "../models";
import { createStore, Thunk, thunk, Action, action } from "easy-peasy";

export interface StoreModel {
  userID: null | string;
  blocks: Block[];
  addUserID: Action<StoreModel, string>;
  fetchUserID: Thunk<StoreModel>;
  addBlocks: Action<StoreModel, Block[]>;
  fetchBlocks: Thunk<StoreModel>;
  createBlock: Thunk<StoreModel, Partial<Block>>;
}

export const store = createStore<StoreModel>({
  userID: null,
  blocks: [],
  addUserID: action((state, payload) => {
    state.userID = payload;
  }),
  fetchUserID: thunk(async (actions, _) => {
    const user = await Auth.currentAuthenticatedUser();
    actions.addUserID(user.attributes.sub);
  }),
  addBlocks: action((state, payload) => {
    state.blocks = payload;
  }),
  fetchBlocks: thunk(async (actions, _, { getStoreState }) => {
    const data = await DataStore.query(Block, (block) =>
      // @ts-ignore
      block.userID("eq", getStoreState().userID)
    );
    actions.addBlocks(data);
    // const subscription = DataStore.observe(Block).subscribe((msg) => {
    //   console.log(msg.model, msg.opType, msg.element);
    // });
  }),
  createBlock: thunk(async (actions, payload, { getStoreState }) => {
    const newBlock = await DataStore.save(
      // @ts-ignore
      new Block({
        ...payload,
        // @ts-ignore
        userID: getStoreState().userID,
      })
    );
  }),
});
