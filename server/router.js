var express = require('express')
var storeSchema = require('./model/store')
var commentSchema = require('./model/comments')

var router = express.Router()


router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
    })

// 商品列表
router.get('/storeList', function (req, res) {
    storeSchema.find(function (err, ret) {
        if (err) return res.end(res.status(500).send('server error'))
        res.end(JSON.stringify(ret))
    })

})
// 获取评论内容
router.get('/commentsList', function (req, res) {
    commentSchema.find({c_id: req.query.id}, function (err, ret) {
        if(err) return res.end(res.status(500).send('server error'))
        res.end(JSON.stringify(ret))
    })
})

// 添加评论内容
router.get('/addContent', function (req, res) {
    console.log(req.query)
    new commentSchema({
        c_id: req.query.id,
        c_name: req.query.name,
        c_content: req.query.content,
        c_good: 0,
        c_data: new Date()
    }).save(function (err) {
        res.end('success')
    })
})

router.get('/', function (req, res) {
    res.render('test.html')
})

router.get('/add', function (req, res) {
    // new commentSchema({
    //     c_id: 'c7aee554f7755eef9db7e90c286cc4a3',
    //     c_name: '李四',
    //     c_content: '发人深省',
    //     c_good: 0,
    //     c_data: '2018-11-09 12:30:28'
    // }).save()
    console.log('test')
    res.render('test.html')
})


module.exports = router