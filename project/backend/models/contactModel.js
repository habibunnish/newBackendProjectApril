const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    firstname: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    lastname: {
        type: String,
        required: [true, "Please add the contact name"],
      },
      street: {
        type: String,
        required: [true, "Please add the contact name"],
      },
      city: {
        type: String,
        required: [true, "Please add the contact name"],
      },
      state: {
        type: String,
        required: [true, "Please add the contact name"],
      },
      zipcode: {
        type: String,
        required: [true, "Please add the contact name"],
      },
      email: {
        type: String,
        required: [true, "Please add the contact email address"],
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);