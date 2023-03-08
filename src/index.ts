import { build_app, get, group } from "@prelog/framework/@main";
import { BaseController } from "./controllers/base/base.controller";
import { DiController } from "./controllers/di/di.controller";
import {
  ErrorController,
  ErrorController1,
} from "./controllers/error/error.controller";
import { ExtendController } from "./controllers/extend/extend.controller";
import { MiddlewareController } from "./controllers/middleware/middleware.controller";
import { SchematicController } from "./controllers/schematic/schematic.controller";

const _port = 3333;

const _cookie_secret = "jsjjbs6sjdbgdh";

const app = build_app(function () {
  this.routes = [
    group(
      get("base-example", BaseController),
      get("di-example", DiController),
      get("extend-example/:id", ExtendController),
      get("middleware-example", MiddlewareController),
      get("schematic-example", SchematicController),
      get("error-example", ErrorController),
      get("error-example2", ErrorController1)
    ).prefix("/examples"),
  ];
  this.cookie_secret = _cookie_secret;
});

app.mount(_port);

export { app };
