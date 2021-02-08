import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ThemePreference {
  ID = "ID",
  SYSTEM = "SYSTEM",
  LIGHT = "LIGHT",
  DARK = "DARK"
}



export declare class UserProfile {
  readonly id: string;
  readonly authID: string;
  readonly theme_preference?: ThemePreference | keyof typeof ThemePreference;
  readonly show_calendar_events?: boolean;
  readonly calendarIDs?: (string | null)[];
  readonly primary_color_preference?: string;
  constructor(init: ModelInit<UserProfile>);
  static copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

export declare class Block {
  readonly id: string;
  readonly title: string;
  readonly notes?: string;
  readonly url?: string;
  readonly authID?: string;
  readonly timer_hours?: number;
  readonly timer_minutes?: number;
  readonly due_date?: string;
  readonly due_time?: string;
  constructor(init: ModelInit<Block>);
  static copyOf(source: Block, mutator: (draft: MutableModel<Block>) => MutableModel<Block> | void): Block;
}