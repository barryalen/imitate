var express = require('express')
var storeSchema = require('./model/store')
var commentSchema = require('./model/comments')
var userSchema = require('./model/user')

var router = express.Router()


router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
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

// 登录
router.post('/login', function (req, res) {
    console.log(req.body)
    userSchema.find(req.body, function (err, ret) {
        if (err) return res.end(res.status(500).send('server error'))
        if (ret.length === 0) {
            res.end('0')
        } else {
            // req.session.user = ret
            res.end('1')
        }
    })
})

// 注册
router.post('/register', function (req, res) {
    console.log(req.body)
    userSchema.find({userName: req.body.userName}, function (err, ret) {
        if (err) return res.end(res.status(501).send('server error'))
        console.log(ret)
        if (ret.length !== 0) {
            res.end('-1')
        } else {
            if (req.body.userName !== '' && req.body.password !== '' && req.body.email !== '') {
                userSchema.find({email: req.body.email}, function (err, ret) {
                    if (err) return res.end(res.status(501).send('server error'))
                    if (ret.length !== 0) {
                        res.end('0')
                    } else {
                        new userSchema(req.body).save(function (err) {
                            res.end('1')
                        })
                    }
                })
            } else {
                res.end('2')
            }
        }
    })
})

router.get('/', function (req, res) {
    res.render('test.html')
})

router.get('/add', function (req, res) {
    // new userSchema({
    //     userName: 'lisi',
    //     password: '123456',
    //     email: '111@qq.com'
    // }).save()
    // console.log('test')
    res.render('test.html')
})


module.exports = router