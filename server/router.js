var express = require('express')
var storeSchema = require('./model/store')

var router = express.Router()

var json = {'test':'hello'}

router.get('/storeList', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    storeSchema.find(function (err, ret) {
        if (err) return res.end(res.status(500).send('server error'))
        // console.log(ret)
        res.end(JSON.stringify(ret))
    })

})

router.get('/get/movie', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.end(json)
    // res.send().json({'test':'hellow'})
})

router.get('/', function (req, res) {
    res.render('test.html')
})

router.get('/add', function (req, res) {
    // new storeSchema({
    //     picAddr: '24e55b8199a68e1b2ade463d7884e0f887975.jpg',
    //     title: '粉面桃花土豆粉',
    //     desc: '[4店通用]单人超值套餐',
    //     market_price: '36元',
    //     price: '29元',
    //     sellNum: 20234
    // }).save()
    console.log('test')
    res.render('test.html')
})


module.exports = router