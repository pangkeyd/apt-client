import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import '@/assets/bootstrap/css/bootstrap.min.css'
import '@/assets/js/jquery.min.js'
import '@/assets/bootstrap/js/bootstrap.min.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
