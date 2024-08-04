import { Schema, model, models } from "mongoose";

const UsersSchema = new Schema({
  user_name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  user_password: {
    type: Schema.Types.String,
    required: true,
  },
  mobile_no: {
    type: Schema.Types.Number,
    required: true,
  },
  country: {
    type: Schema.Types.String,
    required: true,
  },
  state: {
    type: Schema.Types.String,
    required: true,
  },
  city: {
    type: Schema.Types.String,
    required: true,
  },
  address: {
    type: Schema.Types.String,
    required: true,
  },
});

const Users = model("Users", UsersSchema);

export default Users;
