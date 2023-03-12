'use strict'
const User = require("../db/mongoDB.js")
module.exports.putUser = async(event) => {
    const updatedData = JSON.parse(event.body);
    const email = event.queryStringParameters;
    
    try {
        const res = await User.findOneAndUpdate(email, updatedData);
        if(!res){
            return {
                msg : "User not found in DB"
            }
        }
        return {
            msg : "Executed",
            res : res
        }
    } catch (error) {
        return {
            error : error
        }
    }
}