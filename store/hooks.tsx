// https://easy-peasy.now.sh/docs/tutorials/typescript.html#typing-the-hooks
import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "./store";

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
