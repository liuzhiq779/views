//这里需要用到一个vue的静态方法
import vue from 'vue'

const mutations = {
  //第一个参数就是同级的state文件而params而是通过他给appname传了给值,使用的时候用SET_APP_NAME
   SET_APP_NAME (state,params) {
    state.appName = params
   },
   //state里面没有的数值但是现在想添加一个用下面的方法
    SET_APP_NAME (state, params) {
   //第二个是名字,最后一个是值
     vue.set(state,appVersion, 'v2.0')
   },
   //这就是那个在这个里面复的值,然后store.vue页面的mapMutions里面引进去
   SET_STATE_VALUE (state,value) {
   state.stateValue = value
   },
}

export default mutations