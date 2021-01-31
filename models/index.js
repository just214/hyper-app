// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Block } = initSchema(schema);

export {
  Block
};