import { model, Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  userId: { type: String, required: true },
  userType: { type: String, enum: ['ADMIN', 'USER'], required: true }, // Replace with your actual enum values
});

// export interface User {
//   username: string;
//   email: string;
//   password: string;
//   name: string;
//   userId: string;
//   userType: string; // Replace with your actual enum type
// }

// export interface UserDocument extends User, Document {}

export const UserModel = model('User', UserSchema);
