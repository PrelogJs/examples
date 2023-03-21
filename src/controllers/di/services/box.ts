import { create_box } from "@prelog/framework/@box";
import { DbService } from "./db.service";
import { UserService } from "./user.service";

export const diBox = create_box() // создание di "контейнера"
  .wrap("db", () => [DbService]) // регистрация сервиса DbService
  .wrap("userService", ({ db }) => [UserService, db]); // регистрация сервиса UserService
