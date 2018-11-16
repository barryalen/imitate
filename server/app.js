var express = require('express')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 配置模板引擎
app.engine('html', require('express-art-template'))

// 公开公共资源
app.use('/public/', express.static(path.join(__dirname + '/public/')))
app.use('/node_modules/', express.static(path.join(__dirname + './node_modules/')))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(router)
app.use(function (req, res) {
    res.render('404.html')
})

app.listen(8888, function () {
    console.log('server is running')
})