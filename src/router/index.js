import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import guangzhou from '@/pages/guangzhou/index'
// import Detail from '@/pages/guangzhou/Detail'
import japan from '@/pages/japan/index'
import afternoon from '@/pages/afternoon/index'
// import Detail from '@/pages/japan/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Hello, },
    { path: '/guangzhou', meta: { title: '广州路书' }, component: guangzhou, },
    { path: '/japan', meta: { title: '2018意大利炮征战霓虹' }, component: japan, },
    { path: '/afternoon', meta: { title: 'Relax Afternoon', component: afternoon } }
    // { path: '/Detail/:id', meta: { title: '详细信息' }, component: Detail },

  ]
})
