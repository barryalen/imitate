var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/meituan')

var Schema = mongoose.Schema
var newsSchema = new Schema({
    news_id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    gmt_publish: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    clickedNum: {
        type: Number
    }

})

module.exports = mongoose.model('News', newsSchema)