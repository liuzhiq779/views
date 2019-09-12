//一些根级别的状态管理放在这里面
const state = {
 //在这里定义的属性可以在各个组件中使用
  appName: 'admin',
    //这个是用于双向绑定的实例
  stateValue: 'abc'
}

export  default state

//如果要修改这里面的根级别的appName,如果是根据接口去请求的话,需要在action里面
