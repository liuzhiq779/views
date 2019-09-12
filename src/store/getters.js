const getters = {
    appNameWithVersion: (state) => {
      return '${state.appName}v2.0'
    }
}
export default getters
//展示如何使用getters,而这个值是依赖state里面的appName来计算的
//这里面的(state)的和同级的state就是state.js里面的是一样的所有就可以直接引用
