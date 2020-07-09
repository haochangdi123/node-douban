const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const {resolve} = require('path')

// 设置模版引擎都为views下的pug文件
const render = views(resolve(__dirname,'./views'), {
    extension: 'pug'
})
app.use(render)
// OR
// app.context.render = render()


app.use(async (ctx, next) => {
    // 渲染./views/index文件
    await ctx.render('index', {
        you: 'you',
        me: 'me'
    })
})


app.listen(3000)
