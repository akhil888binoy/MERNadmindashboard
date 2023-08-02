import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;

/* In a MERN app, 
the model or userSchema comes
 into play when the controller needs 
 to access the data in the MongoDB database. 
 The model or userSchema is a JavaScript object
  that defines the structure of the data in 
  the MongoDB database. The model or userSchema 
  is used by the controller to create, read, update,
 and delete data in the MongoDB database.*/
