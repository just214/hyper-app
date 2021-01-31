import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Block {
  readonly id: string;
  readonly title: string;
  readonly notes?: string;
  readonly url?: string;
  readonly userID?: string;
  constructor(init: ModelInit<Block>);
  static copyOf(source: Block, mutator: (draft: MutableModel<Block>) => MutableModel<Block> | void): Block;
}