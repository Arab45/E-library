import mongoose from "mongoose";
const Schema = mongoose.Schema

export const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetPaswordToken: {
        type: String
    },
    resetPasswordExpiredAt: {
        type: Date
    }
}
, {timestamps: true}
);


const User = mongoose.model('User', userSchema);

export default User;



