import { TMiddlewareFunction } from "@prelog/framework/@main";
import { arc_logger } from "@prelog/framework/@arc";

export const print_m: TMiddlewareFunction = function () {
  arc_logger.debug(JSON.stringify(this.get_query()));
};
