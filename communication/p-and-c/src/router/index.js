import Vue from 'vue'
import Router from 'vue-router'
import vModelPAndC from '../components/use-vModel-for-normal-pAndc/parent.vue'
import NormalPAndC from '../components/the-normal-way-for-pAndc/parent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: vModelPAndC
    }, {
      path: '/normal',
      component: NormalPAndC
    }
  ]
})
