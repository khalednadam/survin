const express = require("express");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser");
const passport = require("passport");
const { jwtStrategy } = require("./config/passport");
const routes = require("./routes/v1/index");
const session = require("express-session");
const config = require("./config/config");
const { userService } = require("./services");
const { User } = require("./models");
const path = require("path");
const app = express();
const localStrategy = require("passport-local");
app.use(express.json());

const corsOptions = {
  origin: config.CLIENT_URL,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(passport.initialize());
passport.use("jwt", jwtStrategy);
app.set("trust proxy", 1); // trust first proxy

app.use(
  session({
    name: "survin.sid",
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    unset: "destroy",
    cookie: {
      sameSite: config.env === "production" ? "none" : false,
      secure: config.env === "production",
      httpOnly: true,
      maxAge: 60 * 60 * 1000 * 24 * 30,
      // partitioned: true
    },
    store: MongoStore.create({ mongoUrl: config.mongoose.url }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use("/v1", routes);
const frontendPath = path.join(__dirname, "../client/dist/");
// Serve index.html for all non-static routes
app.use(express.static(frontendPath));
app.get('/*', function(req, res) {
  res.sendFile(path.join(frontendPath));
});

module.exports = app;
