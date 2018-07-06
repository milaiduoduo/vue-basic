import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about'
import Business from '@/components/business'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    redirect: '/about',
    beforeEnter(to, from, next) {
      console.log('1.路由級別，helloWorld！！');
      console.log('to,from:', to, from);
      next();
    },
    children: [{
        path: 'about',
        component: About,
        beforeEnter(to, from, next) {
          console.log('1.1 子路由級別，About！！');
          console.log('to,from:', to, from);
          next();
        }
      },
      {
        path: 'business',
        component: Business,
        beforeEnter(to, from, next) {
          console.log('1.2 子路由級別，Business！！');
          console.log('to,from:', to, from);
          next();
        }
      }
    ]
  }]
})

router.beforeEach((to, from, next) => {
  console.log('全局級別！！in beforeEach, to,from:', to, from);
  // console.log('可以監控helloWorld組件中的子路由的變化！！')
  next();
})

export default router;
