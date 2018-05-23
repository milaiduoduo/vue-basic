import Vue from 'vue'
import Router from 'vue-router'
import nextTick1 from '@/components/nextTick1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: nextTick1
    }
  ]
})
