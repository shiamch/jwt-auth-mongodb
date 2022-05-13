const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    todos: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Todo'
        }
    ]
})

module.exports = userSchema;