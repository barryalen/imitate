var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/meituan')

var Schema = mongoose.Schema

var commentSchema = new Schema({
    c_id: {
        type: String,
        required: true
    },
    c_name: {
        type: String,
        required: true
    },
    c_content: {
        type: String,
    },
    c_good: {
        type: Number,
        required: true
    },
    c_data: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)