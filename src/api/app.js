export const getAppName = () => {
    return new Promise((resolve, reject) => {
     //用一个简单的方法模拟接口请求
      const err = null
        setTimeout(() => {
            if (!err) resolve({coud: 200, info: { appName: 'newAppName'}})
            else reject(err) //这样就成功的模拟了一个接口请求了
        })
    })
}