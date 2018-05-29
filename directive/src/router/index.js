import Vue from 'vue'
import Router from 'vue-router'
import clickClose from '../components/clickDocumentClose/myComponent';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/close',
    component: clickClose
  }]
})
