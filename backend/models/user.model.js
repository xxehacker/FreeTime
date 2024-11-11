import { Schema, model } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    image: {
        type: String,
        default: "" 
    },
    searchHistory: {
        type: Array,
        default: []
    }
});


export const User = model("User", userSchema);
