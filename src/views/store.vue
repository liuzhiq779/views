<template>
   <div>
  <!-- 这个演示的是父子组件的通信,下面的这个是兄弟组件的通信 <a-input v-model="inputValue"> </a-input> -->
 <!--这样做的话浏览器会抱一个错因为我们设置了getter 而没有setter所以如下  <a-input v-model="handleInput"> </a-input> -->
  <!-- 这种方法比较麻烦我们换下面一种  <a-input :value="stateValue" @input="handleStateValueChange" ></a-input>  -->
   <a-input v-modle="stateValue"></a-input>  <!-- 接下来我们改装一下计算属性 -->
   <a-show content="stateValue"> </a-show>
   <!--  <p> {{ inputValue }} </p> -->
       <p> {{ stateValue }} ->lastLetter is {{ inputValueLastLetter}} </p>
       <p> username {{ appName }}, appNameWithVersion: {{ appNameWithVersion }}</p>
       <p>username : {{ userName }}, firstLetter is : {{firstLetter}} </p>
       <button @click="handleChangeAppName">修改appName</button>
       <p> {{appVersion}} </p>
       <button @click="changeUserName">修改用户名</button>
       <button @click="registerModle">动态注册模块</button>
       <!-- 我们做一些循环第一个是他的当前项,第二个是索引值第三个是key -->
       <p v-for="(li,index) in todoList" :key="index">{{ li }}</p>
   </div>
</template>

<script>
    import Ainput from '_c/Ainput.vue'
    import AShow from '_c/AShow.vue'
    //用另外一种方法获取state的方法
    //import { mapState } from  'vuex'
    //第三种获取state的方法,应用一个工具方法
    import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
    import state from "../store/state";

   // import state from "../store/state";
    export default {
        name: "store",
        data () {
          return {
              inputValue: ''
          }
        },
        //模板
        components: {
            Ainput,
            AShow
        },
        //在计算属性上获取state(vuex)里面的属性然后通过双向绑定例子形式
        computed: {
           // appName () {
           //     return this.$store.$state.appName
           // },
           //  //在模块中定义的state要怎么获取呢,如下
           //  userName () {
           //     return this.$store.state.user.userName
           //  }
            //传入一个数组...es6中的用做展开操做符号,他会展开map对象
            //
            //另外一种方法
            ...mapState('user',{
                userName: state => state.user.userName,
                appVersion: state => state.appVersion,
                todoList: state => state.user.todo ? state.user.todo.todoList : [],
                //这是第一种双向绑定的获知方法   stateValue: state => state.stateValue
            }),
            //这是第二种双向绑定的用法
            stateValue: {
              //我们自己定义他的setter和getter,这时候他就不在是一个函数了
                get () {
                    //是当我们读取值的时候他会调用这个方法,我们需要return 一个值,而我们读取到二点
                    return this.$store.state.stateValue
                },
                //然后定义set,他也是一个方法当给他(就是要获取的对象应该是这样的)就会调用他,这个方法有个value,就是你先负的值
                set (value) {
                 //这里我们应该是要把这个值通过commit提交一个mutations里面的state的stateValue
                  this.SET_STATE_VALUE(value)
                }
            },
            firstLetter () {
              return this.useraName.substr[0, 1]
            },
            //一样的方法获取getters
            ...mapGetters('user',[
                appNameWithVersion,
                'firstLetter'
            ]),
            appName () {
              return this.$store.state.appName
            },
            //另外一种获取getter的方法
            // appNameWithVersion () {
            //     return this.$store.getters.appNameWithVersion
            // },
            //这个是看Value值的变化然后返回最后一个字母的操作
            inputValueLastLetter () {
              return this.inputValue.substr[-1,1]
            }

        },
      methods: {

            //兄弟组件间的通信
            handleInput (val) {
                thsi.inputValue = val
            },
          //这是另外一种用法
          //如果模块套模块的话就'user/next'
          ...mapActions( [
              'updateAppName'
          ]),
          ...mapMutations([
              'SET_APP_NAME',
              'SET_USER_NAME',
              'SET_STATE_VAlUE' // 在这里引用
          ]),
          //要改变state里面appName的值只有通过下面的的方法
           handleChangeAppName () {
            //这里面的第一个参数就是你通过那个方法名去获取这个值是在mutations.js里面定义的,使用的时候直接用这个要提交的名称的SET_APP_NAME,newappName则是新的值
            //   this.$store.commit({
            //       //对象的写法
            //       type: 'SET_APP_NAME',
            //       appName: 'newAppName'
            //   })
            //     this.SET_APP_NAME('newAppName')
            //     this.$store.commit('SET_APP_VERSION')
               //提交一个这个值,并且在这里调用
               this.updateAppName()
           },
          changeUserName () {
                //和下面的一样不过这个是直接赋值方式,错误的示范
               //this.$store.state.user.userName = 'hahaha'
              //调用一下这个方法,然后传进新值vue-cource,这里为什么不要写模块的名称呢因为vuex会getter,mutations,actions,还有跟级别的模块里面的统统注册在全局当中你只需要去使用就可以
              this.SET_USER_NAME('vue-cource')
              //另外一种方法触发同上,参数可以一对象的形式或者一个值的形式添加在后面
              //this.$store.dispatch('updateAppName','123')
          },
          registerModle () {
                //动态注册模块的作用
            //第一个参数就是我们要添加的模块名称,后面就是我们的对象,下一个案例就是宰模块中添加字模块,例如在user中添加一一个todo模块,
              //这是为了方便我们就把以前的todo模块
            this.$store.registerModle(['user','todo'],{
                //和注册一个模块是一样的,比如我们注册的todoList,用的时候宰上面mapstate里面应用
                state: {
                    todoList: [
                        '学习mutations',
                        '学习actions'
                    ]

                }
            })
          },
          //当上面的双向绑定变化的时候呢就调用这个方法,然后监听他的变化,这个val就是修改后的值,应该用mutations里面复一个值
          handleStateValueChange (val) {
           // 然后在这里触发这个引用
              this.SET_STATE_VALUE(val)
          }
      }
    }


    //mutations中如果是通过接口回去的值的话,ajax是异步操作这个是不能在mutation当中做的他只能做同步操作,如果有异步操作获取值的话就用actions
</script>

<style scoped>

</style>
