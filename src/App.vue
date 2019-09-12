<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home'  }">Home</router-link>
      <router-link v-bind:to="{ name: 'about' }">About</router-link>
    </div>
    <transition-group name="routerTransition">
    <router-view key="default"/>
      <!-- 1.下面两个是命名视图其作用详细的去页面看,2.他们之间的通信用Bus    -->
    <router-view key="email" name="email"/>
    <router-view key="tel" name="tel"/>
    </transition-group>
  </div>
</template>
<script>
export default {
  watch: {
    //在这监听路由的变化
    data () {
      return {
        routerTransition: ''
      }
    },
    '$router' (to) {
     to.query && to.query.transitionName &&(this.routerTransition = to.query.transitionName)
    }
  }
}
</script>

<style lang="scss">
  //要使用页面有切换用过渡要过transition,如果要是多个组件有过渡动画效果则用transition
  //这个是页面的透明度
.router-enter{
 opaction: 0;
 //这个是页面的切换时间
 .router-active{
   transition: opacity 1s ease;
 }
 .router-enter-to{
   opacity: 1;
 }
 .router-enter{
    opacion: 1;
 }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
