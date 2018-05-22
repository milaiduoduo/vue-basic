import Vue from 'vue'
import Router from 'vue-router'
import ref from '../components/ref-for-dom-A-component.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ref
    }
  ]
})
