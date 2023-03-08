const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

mongoose.connect('mongodb://127.0.0.1:27017/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
)
  .then(() => console.log('Connected!'))
  .catch((e)=>console.log("Error While Connecting to DB ",e));

const User = mongoose.model("User",userSchema);

module.exports = User

