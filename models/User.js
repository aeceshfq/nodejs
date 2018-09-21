const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        test: {
            type: String
        }
    },
    {
        collection: 'users'
    }
);

module.exports = mongoose.model('User', UserSchema)