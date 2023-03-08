import { TMiddlewareFunction } from "@prelog/framework/@main";

export const cookie_m: TMiddlewareFunction = function () {
  this.set_cookie("test_prelog", "prelog_cookie", {
    signed: true,
    httpOnly: true,
  });
};
