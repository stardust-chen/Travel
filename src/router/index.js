import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => { return import("@/pages/Welcome") }
    },
    {
      path: '/guangzhou',
      meta: { title: '广州路书' },
      component: () => { return import("@/pages/guangzhou") }
    },
    {
      path: '/japan',
      meta: { title: '2018意大利炮征战霓虹' },
      component: () => { return import("@/pages/japan") }
    },
    {
      path: '/afternoon',
      meta: { title: 'Relax Afternoon' },
      component: () => { return import("@/pages/afternoon") }
    }
    // { path: '/Detail/:id', meta: { title: '详细信息' }, component: Detail },

  ]
})
