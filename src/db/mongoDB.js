const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/my_serverlessDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
)
  .then(() => console.log('Connected!'))
  .catch((e)=>console.log("Error While Connecting to DB ",e));

const userSchema = new Schema({
    name: {
      type : String,
      required : true
    },
    email: {
      type : String,
      required : true
    },
    password: {
      type : String,
      required : true
    },
    username : {
      type : String,
      required : true
    }
});

const User = mongoose.model("Users",userSchema);

module.exports = User

