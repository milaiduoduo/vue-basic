import Vue from 'vue'
import Router from 'vue-router'
import Listen from '../components/listen-native/listen-native.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Listen
    }
  ]
})
