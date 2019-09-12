<template>
   <div class="email">
  <!-- 这是以前的页面实例email: lison16new@163.com -->
      <button @click="handleClick">点我</button>
   </div>
</template>

<script>
    export default {
        name: "email",
        methods: {
         //定义这个方法触发on-click这个事件,然后随便给个值,在tel中需要接收这个事件
          handleClick () {
           //原理就是$emit可以触发当前的实例上的一些事件而下一个页面的$on,对就是这里的$bus,这个通过监听on-click监听事件响应
             this.$bus.$emit('on-click' ,'hello')
          }
        },
        mounted () {
            //这是一个生命周期钩子,这是打印这个bus的方法
        // console.log(this.$bus)
        this.$on('on-click', mes => {
            console.log(mes)
        })

        }
    }
</script>

<style scoped>
   .email{
      border: 1px green ;
   }

</style>