作者：蜗牛的北极星之旅
链接：https://juejin.im/post/5df6369be51d4557ef03fa0b
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

1:设置多段路径参数
/user/:username                  /user/evan                  {username:"evan"}
/user/:username/post/:post_id    /user/evan/post/123   {username:"evan",post_id:"123"}

2:响应路由参数变化
watch:{
    "$route" (to,from){
        //
    }
}

beforeRouterUpdate(to,from,next){
    // react to route changes...
    // next()
}

3:路由匹配
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}

// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'

4，高级匹配模式

