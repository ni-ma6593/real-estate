import { model, models, Schema } from "mongoose";
import timestampsPlugin from "mongoose-timestamp";
const userSchema = new Schema({
  email: {
    required: true,

    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    type: String,
    default: "USER",
  },
});
userSchema.plugin(timestampsPlugin);
const User = models.User || model("User", userSchema);
export default User;
