import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
// import {setTile} from '@/lib/util'



Vue.use(Router)


// export default new Router({
//     mode: 'hash',
//     routes: router
// })

const HAS_LOGINED = true

//前置钩子前置守卫
router.beforeEach((to, from, next) => {
    //这是设置meta字段
    //if (to, meta, title)
    //o.meta && to.meta.title && setTitle(to.meta.tile)
    //先判断该用户是否登陆了
  if(to.name !== 'login') {
      if(HAS_LOGINED) next() //如果登陆了就跳装到想去的页面
      else next({ name: 'login'}) //不然的话跳转到 登陆页面
  } else {
      if(HAS_LOGINED) next({ name: 'home'})// 如果登陆了就跳装到登陆页面
      else next() //否则就到其他页面
  }
})  //路由守卫,之前置守卫,to是即将跳装到的页面,from是下载的页面next是函数确认要跳转就用next


//钩子,在路由跳转之后做一些操作
router.afterEach((to, from) => {
 // logining  = false //等待加载就被取消了
})


//一个全局守卫区别是在导航被确认之前然后在所有组件内守卫确定和所有异步路由被确认解析之后被调用被确认
//导航钩子被使用之后
router.beforeResolve ((to, from) => {

})

export default new Router({
    mode: 'hash',
    routes: router
})

//路由独享守卫在路由列表里面配置,例如配置一个专门给Home独享的守卫

/**一个完整的导航流程包括
 * 1.首先我们的导航被触发不管你是通过this.router通过push触发还是在url里面修改地址都可以
 * 2.导航被触发之后首先会在失活的组件即即将(即将离开的页面组件中)在这里使用离开守卫beforeRouteLeave
 * 3.接下来调用调用全局的前置守卫也就是beforeEach
 * 4.接下来在重负用的组件中调用 beforeRouteUpdate ,如果被第二次用的组件是一个新的只用一次就只调用beforeRouteEnter
 * 5.调用独享的守卫beforeEnter这个是在我们的路由列表里面配置的
 * 6.解析异步路由组件
 * 7.在被激活的组件(即将进入的页面组件) 里调用beforeRouteEnter
 * 8.在这个完了之后调用全局的解析守卫beforeResolve,这个是在导航被确认之前异步路由被解析之后被调用的
 * 9.在这之后导航被确认了
 * 10.之后调用全局的后置守卫afterEach,所有的钩子都结束了
 * 11.之后触发DOM的更新渲染这个时候页面就渲染了
 * 12.用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */