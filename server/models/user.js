import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  first_name : { type :String, required : true },
  last_name: { type: String, required:  true },
  mobile: {type: String, required : true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);