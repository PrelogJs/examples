import { TMiddlewareFunction } from "@prelog/framework/@main";
import { Extend } from "./extends";
import { SchemaType } from "./schema";

export const user_m: TMiddlewareFunction<SchemaType, Extend> = function () {
  const { id } = this.get_params();
  this.set_user({ name: "Test", id });
};
