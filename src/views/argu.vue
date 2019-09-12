<template>
  <div>
   {{ name }}
  </div>
</template>

<script>
    export default {
      post: {
            name: {
              type: String,
              default: 'lison'
          }
       },
        created(){
            console.log(this.$route)
        },
        //组件发生变化组件被服用的时候被调用的
        beforeRouteUpdata (to, from, next) {
         //使用this实例是可以访问这个路由实例的
           console.log(to, from, next)
        }

    }
</script>

<style scoped>

</style>