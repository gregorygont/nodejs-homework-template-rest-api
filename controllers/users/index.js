import { ctrlWrapper } from "../../decorators/index.js";
import register from "./register.js";
import login from "./login.js";
import logout from "./logout.js";
import current from "./current.js";
import updateSubscription from "./updateSubscription.js";
import updateAvatar from "./updateAvatar.js";
import verifyEmail from "./verifyEmail.js";
import resendVerifyEmail from "./resendVerifyEmail.js";

export default {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  current: ctrlWrapper(current),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
