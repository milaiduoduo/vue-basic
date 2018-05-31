import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/parent'
import GetBus from '@/components/getBusEvent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/getbus',
      component: GetBus
    }
  ]
})
