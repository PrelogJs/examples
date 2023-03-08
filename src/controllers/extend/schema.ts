import { number, object, TPayloadToTs } from "@prelog/framework/@cascade";

export const schema = {
  params: object({
    id: number().min(1),
  }),
};

export type SchemaType = TPayloadToTs<typeof schema>;
