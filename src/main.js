import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Bus from './lib/bus'

Vue.config.productionTip = false
//怎样把他注册到根实例里面呢,我们用下面的方法给他的的原型对象上添加bus
Vue.prototype.$bus = Bus  //这样我们就在实例了注册了bus,在email组件里和tel组件里

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
