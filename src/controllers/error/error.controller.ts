import {
  HttpError,
  http_codes,
  pre_handler,
  TSingleController,
} from "@prelog/framework/@main";

export const ErrorController: TSingleController = () => {
  pre_handler(() => {
    throw "example error";
  });
  return function () {};
};

export const ErrorController1: TSingleController = () => {
  pre_handler(() => {
    throw new HttpError("example http error", http_codes.FORBIDDEN);
  });
  return function () {};
};
