import Vue from 'vue'
import Router from 'vue-router'
import clickClose from '../components/clickDocumentClose/myComponent';
import inputPage from '../components/kindOfInputFocus/page.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path:'/',
    component:inputPage
  },{
    path: '/close',
    component: clickClose
  }]
})
