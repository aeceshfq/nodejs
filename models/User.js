const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        }
    },
    {
        collection: 'users'
    }
);

module.exports = mongoose.model('User', UserSchema)