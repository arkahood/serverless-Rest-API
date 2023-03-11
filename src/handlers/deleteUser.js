'user strict'
const User = require("../db/mongoDB.js");

module.exports.deleteUser = async(event) => {
    const { email } = JSON.parse(event.body);
    const res = await User.findOneAndDelete({
        email
    })
    if(!res){
        return {
            msg : "No User With Particular email exist"
        }
    }
    return {
        msg : "Delete Query executed",
        res : res
    }
}