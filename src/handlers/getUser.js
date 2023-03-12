'use strict'
const User = require('../db/mongoDB');

module.exports.getUser = async(event)=>{
    const response = await User.find({});
    const res = {
        statusCode : 200,
        body : JSON.stringify(
            {
                msg : "Get Function Working",
                response : response
            }
        )
    };

    console.log("this is -> ",res);
    return res;
}
