
const { Schema, model } = require('mongoose');

const AdminSchema = Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    lastName: {
        type: String,
        required: [true, 'The lastName is required']
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true
    },
    status: {
        type: String,
        required: [true, 'The status is required'],
    },
    role: {
        type: String,
        required: [true, 'The rol is required']
    },
    picture: {
        type: String,
    }
});

module.exports = model( 'Admin', AdminSchema );
