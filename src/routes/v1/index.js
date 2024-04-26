const express = require("express");
const authRoute = require("./auth.route");
const router = express.Router();
const userRoute = require("./user.route");
const surveyRoute = require("./survey.route");
const responseRoute = require("./response.route");

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/survey",
    route: surveyRoute,
  },
  {
    path: "/response",
    route: responseRoute,
  }
];

// const devRoutes = [
//   {
//     path: "/docs",
//     route: docsRoute
//   }
// ]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
