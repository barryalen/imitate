var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/meituan')

var Schema = mongoose.Schema

var storeSchema = mongoose.Schema({
    picAddr: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    market_price: {
        type: String,
    },
    price: {
        type: String,
        required: true
    },
    sellNum: {
        type: Number
    }
})

module.exports = mongoose.model('Store', storeSchema)