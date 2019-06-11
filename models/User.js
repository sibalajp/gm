const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  username: String,
  salt: String,
  hash: String
})


mongoose.model('Users', userSchema);
