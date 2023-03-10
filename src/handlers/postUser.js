'use strict'

const User = require("../db/mongoDB");

module.exports.postUser = async(event) => {
    const {name , email, password , username} = JSON.parse(event.body);
    if(!email){
        return {
            msg : "Please Provide Email"
        }
    }
    try {
        const user = new User({
            name,
            password,
            email,
            username
        });
        const res = await user.save();
        return {
            message : "User Adder",
            respose : res
        }
    } catch (error) {
        return {
            message : error
        }   
    }
    
}
