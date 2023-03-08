import { arc_logger } from "@prelog/framework/@arc";
import { use_schematic } from "@prelog/framework/@cascade";
import { TSingleController } from "@prelog/framework/@main";
import { schema, SchemaType } from "./schema";

export const SchematicController: TSingleController<SchemaType> = () => {
  use_schematic<SchemaType>(schema);
  return function () {
    const { num, str } = this.get_query();
    arc_logger.debug(`${num} ${str}`);
    return "schematic_controller";
  };
};
