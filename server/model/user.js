var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/meituan')

var Schema = mongoose.Schema

var userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
    }
})

module.exports = mongoose.model('User', userSchema)