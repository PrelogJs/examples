import { arc_logger } from "@prelog/framework/@arc";
import { use_deps_box } from "@prelog/framework/@box";
import { TSingleController } from "@prelog/framework/@main";
import { diBox } from "./services/box";

export const DiController: TSingleController = () => {
  const { userService } = use_deps_box(diBox);
  return async function () {
    const user = await userService.getUserById(2);
    arc_logger.debug(JSON.stringify(user));
    return user;
  };
};
