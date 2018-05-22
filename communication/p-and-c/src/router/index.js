import Vue from 'vue'
import Router from 'vue-router'
import vModelPAndC from '../components/use-vModel-for-normal-pAndc/my-component.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: vModelPAndC
    }
  ]
})
