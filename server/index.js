const Koa = require('koa')
const app = new Koa()
// const ejs = require('ejs')
const pug = require('pug') //新版的jade
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl/')

app.use(async (ctx, next) => {
    ctx.type = 'text/html;charset=utf-8'
    // ctx.body = htmlTpl

    // ctx.body = ejs.render(ejsTpl,{
    //     you: 'hcd',
    //     me: 'qwe'
    // })

    ctx.body = pug.render(pugTpl, {
        you: 'hcd',
        me: 'qwe'
    })
})


app.listen(3000)