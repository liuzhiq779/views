<template>
  <input @input="handleInput" :value="value"/>
</template>

<script>
  //这个主要是演示父子组件通信的
    //使用这个组件的方法是在另外一个组件store中引用
    export default {
        name: "Ainput",
        props: {
            value: {
                type: [String, number],
                default: ''
            }
        },
        methods: {
           handleInput () {
            //获取文本框中的值
            const value = event.target.value
            //把值传出去,这时候使用事件
            this.$emit('input',value)
           }
        }
    }
</script>

<style scoped>

</style>