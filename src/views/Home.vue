<template>
    <div>
        <div class="home">
            <b>{{ food }}</b>
            <button @click="handleClick('back')">返回上一页</button>
            <button @click="handleClick('push')">跳转到parent</button>
            <button @click="handleClick('replace')">替换到parent</button>
        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        props:{
          food: {
              type: String,
              default: 'apple'
          }
        },
        //to当前路由对象,from当前路由对象,在被确认前被调用,这时候页面还没有被显然
         beforeRouteEnter(to, from, next) {
            console.log(to.name)
             next()
         },
        //他的作用是当你在一个页面编辑的时候,当你要离开的时候提醒用户你还没有保存是否继续退出
        //他会在你路由即将离开的时候调用这个方法
        beforeRouteLeave (to, from, next) {
         const leave = confirm('您确定要离开吗')
         if (leave) next()
          else next(false)
        },
        methods: {
            handleClick(type) {
                if (type === 'back') {
                    this.$router.back(-1)  //编程是导航通过js方式控制页面的跳 装
                } else if (type === 'push') {
                    this.$router.push({
                        name: 'argu',
                        params: {
                            name: 'lison'
                        }
                    })
                } else if (type === 'replace') {
                    this.$router.replace({
                        name: 'parent'
                    })
                }
            }
        }
    }
</script>
