// import mongoose from 'mongoose'
// import userSchema from '../schemas/user'
var mongoose = require('mongoose')
var userSchema = require('../schemas/user')
module.exports = mongoose.model("User",userSchema);