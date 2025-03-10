import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    messageTitle: {
      type: String,
      required: true,
    },
    messageBody: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);

//message:
// {
//     "messageTitle":"This is the title of a message",
//     "messageBody":"Thsi is the body of the message",
//     "user":"this is the user who wrote this message"

// }
