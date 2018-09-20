import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/login'
import Layout from "@/view/layout/layout"
import main_0 from "@/view/layout/components/main_0.vue"
import main_1 from "@/view/layout/components/main_1.vue"
Vue.use(Router)
export default new Router({
  routes: [
    
    {
      path: '/',
      redirect: '/Layout'
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      children:[{
        path: '/main_0',
        name:'main_0',
        ccomponent:main_0
      },{
        path: '/main_1',
        name:'main_1',
        ccomponent:main_1
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
