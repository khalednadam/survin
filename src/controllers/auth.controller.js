const httpStatus = require("http-status");

const {
  userService,
  tokenService,
  authService,
  emailService,
} = require("../services/index");
const catchAsync = require("../utils/catchAsync");
const { tokenTypes } = require("../config/tokens");
const ApiError = require("../utils/ApiError");
const { sendEmail } = require("../services/email.service");

/**
 * register a user using createUser service
 */
const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const wlcmsg = `
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="color: #333;">Welcome to Survin!</h1>
<p style="color: #666; line-height: 1.6;">Hello ${user.name},</p>
    <p style="color: #666; line-height: 1.6;">Welcome aboard! You've successfully signed up for Survin, your go-to platform for creating and managing surveys with ease.</p>
    <p style="color: #666; line-height: 1.6;">Whether you're conducting market research, gathering customer feedback, or analyzing employee satisfaction, Survin has all the tools you need to make informed decisions based on valuable insights.</p>
    <p style="color: #666; line-height: 1.6;">We're thrilled to have you join us on this journey!</p>
    <p style="color: #666; line-height: 1.6;">Best regards,<br> The Survin Team</p>
  </div>
</body>
`
  await sendEmail(user.email, 'Welcome to Survin!', wlcmsg);
  res.status(httpStatus.CREATED).send({ user });
});

/**
 * Login with email and password
 */
const emailAndPasswordLogin = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);

  const tokens = await tokenService.generateAuthToken(user);
  const sessionUser = {
    id: user.id,
    role: user.role,
    username: user.username,
    name: user.name,
    email: user.email,
    refreshToken: tokens.refresh.token,
    accessToken: tokens.access.token,
    profilePhotoUrl: user.profilePhotoUrl,
  };
  req.session.user = sessionUser;
  // req.session.save();
  req.session.save((err) => {
    if (err) {
      console.error("Error saving session:", err);
      return res.status(500).send({ message: "Internal server error" });
    }
    res.send({
      user: user.id,
      tokens: tokens,
    });
  });
});

/**
 * Logout
 */
const logout = catchAsync(async (req, res) => {
  await authService.logout(req.session.user.refreshToken);
  req.session.destroy();
  res.clearCookie("survin.sid");
  res.status(httpStatus.NO_CONTENT).send();
});

/**
 * refresh auth tokens
 */
const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

/**
 * send re-set password email
 */
const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(
    req.body.email
  );
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

/**
 * reset password
 */
const resetPassword = catchAsync(async (req, res) => {
  // const resetPasswordToken = await tokenService.generateResetPasswordToken(
  //   req.body.email
  // );
  const verifiedToken = await tokenService.verifyToken(req.query.token, tokenTypes.RESET_PASSWORD);
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

/**
 * change password
 */
const changePassword = catchAsync(async (req, res) => {
  const user = await authService.loginUserWithEmailAndPassword(req.body.email, req.body.password);
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "wrong password");
  }
  const resetPasswordToken = await tokenService.generateResetPasswordToken(
    req.body.email
  );
  await authService.resetPassword(resetPasswordToken, req.body.newPassword);
  res.status(httpStatus.NO_CONTENT).send();
})

/**
 * send verification email
 */
const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(
    req.user
  );
  await emailService.sendVerificationEmail(req.body.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

/**
 * verify email
 */
const verifyEmail = catchAsync(async (req, res) => {
  await authService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  emailAndPasswordLogin,
  logout,
  refreshTokens,
  forgotPassword,
  sendVerificationEmail,
  verifyEmail,
  resetPassword,
  changePassword
};
