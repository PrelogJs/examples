import {
  number,
  object,
  string,
  TPayloadToTs,
} from "@prelog/framework/@cascade";
export const schema = {
  query: object({
    num: number().min(1).max(255),
    str: string().nullable(),
  }),
};

export type SchemaType = TPayloadToTs<typeof schema>;
