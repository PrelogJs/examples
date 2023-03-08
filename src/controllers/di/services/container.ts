import { create_deps_container } from "@prelog/framework/@di";
import { UserService } from "./user.service";
export const diContainer = create_deps_container().add("userService", () => [
  UserService,
]);
