import { arc_logger } from "@prelog/framework/@arc";
import { use_schematic } from "@prelog/framework/@cascade";
import {
  pre_handler,
  TSingleController,
  use_extend,
} from "@prelog/framework/@main";
import { Extend, RndId } from "./extends";
import { user_m } from "./middleware";
import { schema, SchemaType } from "./schema";

export const ExtendController: TSingleController<SchemaType, Extend> = () => {
  use_extend<Extend, "user">("user", undefined);
  use_extend<Extend, "get_rnd_id">("get_rnd_id", RndId);
  use_schematic(schema);
  pre_handler(user_m);
  return function () {
    arc_logger.debug(this.get_rnd_id().toString());
    arc_logger.debug(JSON.stringify(this.get_user()));
    return "extend_controller";
  };
};
