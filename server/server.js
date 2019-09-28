const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

const localStrategy = require("./passport/local");
const jwtStrategy = require("./passport/jwt");

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");

mongoose.connect("mongodb://localhost/gm_dev");

const { CLIENT_ORIGIN } = require("./config");

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(bodyParser.json());

// Parse request body
app.use(express.json());

//Configure Passport to utilize the strategies, use them to create middleware fns, and pass in those middleware fns to the endpoints to authenticate and authorize access!
passport.use(localStrategy);
passport.use(jwtStrategy);

//we include this here so we don't have to for every single router endpoint
const options = { session: false, failWithError: true };
const jwtAuth = passport.authenticate("jwt", options);
const localAuth = passport.authenticate("local", options);

app.use("/users", usersRouter);
app.use("/login", localAuth, authRouter);
app.use("/", jwtAuth, authRouter); //for refresh
//Any endpoint that passes the jwtAuth strategy and is validted: The `req.user` has a value now because of `done(null, payload.user)` in JWT Strategy

// Custom 404 Not Found route handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Custom Error Handler
app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, { message: err.message });
    res.status(err.status).json(errBody);
  } else {
    // console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(9000, function() {
  console.log("the server is running on port 9000");
});
