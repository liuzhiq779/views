//持久存储化插件当你每次刷新浏览器的时候你state里面存储的所有的状态呢都会被重新清除因为他是存储在内存中的
//而不是本地的你有刷新就没有了,但有时候我们希望把东西存在本地这样就不会一刷新就没有了
//插件其实就是一个函数
//这个函数就是在每次store调用的时候就刷新
export default store => {
    //console.log('store初始化')
    //先判断一下如果state有这个字段那么说明我们存了,那么怎么替换掉这个实例呢
    if (localStorage.state) store.rplaceState(JSON.parse(localStorage.state))
   //第一次刷新浏览器的时候定义宰这里,subscribe的作用是每次
    store.subscribe((mutations, state) =>{
     localStorage.state = JSON.stringify(state) //转换为一个字符串对象存在localStorage里面,这样就存储了
    })
}

//如何使用这个插件呢,就是在我们创建实例的地方index.js里面通过plugins: 这个数组



