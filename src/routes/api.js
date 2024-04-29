const express = require("express");
const router = express.Router();

const initApiRouters = () => {
  router.get("/test-api", apiController.testApi);
  return application.use("/api/v1/", router);
};
export default initApiRouters;
