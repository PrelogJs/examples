import { pre_handler, TSingleController } from "@prelog/framework/@main";
import { print_m } from "./middlewares/print_query";
import { cookie_m } from "./middlewares/set_cookie";

export const MiddlewareController: TSingleController = () => {
  pre_handler(print_m);
  pre_handler(cookie_m);
  return function () {
    return "middleware_controller";
  };
};
