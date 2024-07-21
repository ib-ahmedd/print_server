import { model, Schema } from "mongoose";

const OTPsSchema = new Schema({
  email: {
    type: Schema.Types.String,
    required: true,
  },
  code: {
    type: Schema.Types.Number,
    required: true,
  },
});

const OTPs = model("OTPs", OTPsSchema);

export default OTPs;
