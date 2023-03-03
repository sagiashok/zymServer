const mongoose = require("mongoose");
const fun = require("../functions/functions");
//mongooseSechma
const Devotees = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    default: null,
  },

  userFatherName: {
    type: String,
    required: true,
    default: null,
  },

  userPhoneNumber: {
    type: String,
    validate: {
      validator: (value) => {
        return /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/.test(value);
      },
      message: "The phone number must be 10 digits",
    },
    required: true,
    default: null,
  },

  userEmailId: {
    type: String,
    trim: true,
    lowercase: true,

    // validation  of Email
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
    default: null,
  },

  userAge: {
    type: Number,
    validate: {
      validator: (value) => {
        return value.toString().length === 2;
      },

      message: "Enter a Valid Age",
    },
    required: true,
    default: null,
  },
  entryDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  exitDate: {
    type: Date,
    default: fun.dateWithMonthsDelay(1),
    required: true,
  },

  paidAmount: {
    type: Number,
    validate: {
      validator: (value) => {
        return value.toString().length === 4 || value.toString().length === 5;
      },

      message: "Enter a Valid Amount",
    },
    required: true,
    default: null,
  },

  userPackage: {
    type: String,
    required: true,
    default: null,
  },
});

// Model creation
module.exports = mongoose.model("devotee", Devotees);
