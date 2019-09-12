<template>
  <div>
   <!--这是上一个页面的实例用例  tel: 16677777777 -->
    <p>{{ message }}</p>
  </div>
</template>

<script>
    export default {
        name: "tel",
        data () {
            return {
                message: ''
            }
        },
        //在这个生命周期钩子里监听这个事件
        mounted () {
        //没错就是这的$on是给当前事件绑定一个事件监听,现在的实例是绑定在上一个页面的..
         this.$bus.$on('on-click', (mes) => {
          this.message = mes
         })
        }
    }
</script>

<style scoped>

</style>