// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ThemePreference = {
  "ID": "ID",
  "SYSTEM": "SYSTEM",
  "LIGHT": "LIGHT",
  "DARK": "DARK"
};

const { UserProfile, Block } = initSchema(schema);

export {
  UserProfile,
  Block,
  ThemePreference
};