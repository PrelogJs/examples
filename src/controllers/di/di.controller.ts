import { arc_logger } from "@prelog/framework/@arc";
import { use_deps_container } from "@prelog/framework/@di";
import { TSingleController } from "@prelog/framework/@main";
import { diContainer } from "./services/container";

export const DiController: TSingleController = () => {
  const { userService } = use_deps_container(diContainer);
  return function () {
    arc_logger.debug(JSON.stringify(userService.getUserById(2)));
    return "di_controller";
  };
};
