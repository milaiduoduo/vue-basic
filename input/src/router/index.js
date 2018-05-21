import Vue from 'vue'
import Router from 'vue-router'
import radio from '@/components/radio-single';
import radioGroup from '@/components/radio-group';
import radioBind from '@/components/radio-bindValue';
import input from '@/components/input-vmodel';
import inputInput from '@/components/input-input';
import inputLazy from '../components/input-lazy.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: radio
    },
    {
      path: '/group',
      component: radioGroup
    },
    {
      path: '/bind',
      component: radioBind
    }, {
      path: '/input',
      component: input
    },
    {
      path: '/inputInput',
      component: inputInput
    },
    {
      path: '/inputLazy',
      component: inputLazy
    }

  ]
});

export default router;
