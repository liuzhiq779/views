//这个方法假如是一个api请求的话,我们先要把他引进去
import { getAppName } from '@/api/app.js'

const  actions = {
   //这里面提交一个参数,这是Es6的结构赋值法
    //这里的回调太多了那我们可以用es8的asys的方式
   // updateAppName ({ commit }) {
   //  commit('SET_APP_NAME',res.info.appName)
   //   getAppName().then(res => {
   //      console.log(res)
   //   })
   async updateAppName ({ commit }) {
       //怎么处理里面的处理异常呢,我们用try把里面的包裹起来
       try {
           const {} = await getAppName()
           commit('SET_APP_NAME', appName)
       } catch (err) {
           console.log(err)
       }
   }
}
export default actions

//模块适合项目非常庞大的时候呢这时候state会变得非常臃肿,我们把它才成各个模块就非常适合管理了
//每个模块都是一个state,在一个模块中还可以拆分为下一个模块