import Home from '@/views/Home.vue'

const router = [
    {
        path: '/',
        name: 'home',
        alias: '/home_page', //别名
        component: Home,
        props: route => ({
            food: route.query.food
        }),
        //独享路由
        beforeEnter: (to, form, next) => {
          // if (from.name === 'login') alert('这是从登陆页来的')
          //   else alert('这不是从登陆页来的')
            next()
        }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:  () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        props: {
            food: 'banana'

        },
        //路由源信息的使用
        // 存放一下信息,比如要定义的权限,如果需要的话可以在路由前置守卫里定义
        meta: {
        title: '关于'
        }
    },
    {
      path: '/login',
      name: 'login',
     component:() => import('@/views/login.vue')
    },
    { //动态路由
        path: '/argu/:name',
        name: 'argu',
        component: () => import('@/views/argu.vue'), // 组件的复用同一个页面处理不同的逻辑
        props: true
    },
    {
        path: '/parent',
        name: 'parent',
        component: () => import('@/views/parent.vue'), // 嵌套路由
        children: [
            {
              path: 'child',
              component: () => import('@/views/child.vue')
            }
        ]
    },
    {
       path: '/named_view',
       components:{
         default: () => import('@/views/child.vue'),  //--命名视图,当点击页面的时候就会条状到相应的页面去
         email: () => import('@/views/email.vue'),
         tel: () => import('@/views/tel.vue')
       }

    },
    {
      path: '/main',  //重定向,把一个视图配置到另外一个里面去
      redirect: to => '/'         //当访问mian这个路径的时候他就会跳转到home
    },
    {
      path: '/store',
     component: () => import('@/views/store.vue')

    },
    {
       path: '*',
       component: () => import('@/views/404.vue')

    }
]

export default router;
