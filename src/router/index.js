import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import guangzhou from '@/pages/guangzhou/index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Hello, },
    { path: '/guangzhou', meta: { title: '广州路书' }, component: guangzhou, },
  ]
})
