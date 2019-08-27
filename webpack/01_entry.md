单入口文件
module.exports = {
    entry:'./path/to/my/entry/file.js'
}

多入口
module.exports = {
    entry:[
        app:'./src/app.js',
        adminApp:'./src/adminApp.js'
    ]
}

