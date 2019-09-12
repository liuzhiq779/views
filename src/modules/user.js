const state = {
   userName: 'Liston'
}

const getter = {
 //例如想获取名字第一个首字母
    firstLatter: (state) => {
        return state.userName.substr[0,1]
    }
}

const mutations = {
    //修改user的值
    SET_USER_NAME (stater,params) {
        stater.username = params
    }
}

const actions = {
  updateUserName ({ commit, state, rootState,dispatch}) {
     //如果模块中还有一个xx那你就可以通过xxx这个值来触发这个action
     dispatch('xxx', )
  },
    xxx () {

    }
}

export default {
   //模块使用命名空间
    namespaced: true,
   state,
   getters,
   mutations,
   actions,
   model: {

   }
}