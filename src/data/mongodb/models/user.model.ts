import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nombre es rquerido'],
  },
    email: {
        type: String,
        required: [true, 'Email es requerido'],
        unique: [true, 'Email ya existe'],
    },
    password: {
        type: String,
        required: [true,'Password es requerido'],
    },
    role: {
        type: [String],
        default: 'USER_ROLE',
        enum: ['USER_ROLE', 'ADMIN_ROLE', 'SUPER_ADMIN_ROLE'],
    },
    img: {
        type: String,
        default: true,
    }
}
);

export const UserModel = mongoose.model('User', userSchema);
