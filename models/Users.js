const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema 
// Define a MongoDB schema and model (e.g., for a "User" collection)
const UserSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    } ,
    fullName:{
        type: String,
        required: true
    } ,
    avatarUrl:{
        type: String,
        required: true
    } ,
    timestamp: {
        type: Date,
        default: Date.now
    }
  });
  
  module.exports = User = mongoose.model('user', UserSchema)