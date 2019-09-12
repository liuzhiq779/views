import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from '../modules/user'
import saveinLocal from "./plugin/saveinLocal";

Vue.use(Vuex)

export default new Vuex.Store({
  //下面这一个是一个如果值是true那么就开启了严格模式,而这种写法就是判断后在执行
  strict: process.env.NODE_ENV === 'development', //如果是开发环境就报true,而打包以后呢就报false
  state,
  getters,
  mutations,
  actions,
  modules:{
    user
  },
    plugins: [ saveinLocal ]
})
