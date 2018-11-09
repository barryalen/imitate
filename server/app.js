var express = require('express')
var path = require('path')

var app = express()

// 配置模板引擎
app.engine('html', require('express-art-template'))

// 公开公共文件
app.use('/public/', express.static(path.join(__dirname + './public/')))
app.use('/node_modules/', express.static(path.join(__dirname + './node_modules/')))
var json = {'test':'hello'}
app.get('/get', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.end(JSON.stringify(json))
})

app.get('/get/movie', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.end(json)
    // res.send().json({'test':'hellow'})
})

app.listen(8888, function () {
    console.log('server is running')
})