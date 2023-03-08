import { TSingleController } from "@prelog/framework/@main";

export const BaseController: TSingleController = () => {
  return function () {
    return "base_controller";
  };
};
