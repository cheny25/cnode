import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import register from '@/components/login/register'
import login from '@/components/login/login'
import information from '@/components/login/information'
import userInfo from '@/components/login/userInfo'
import article from '@/components/article/article'
import moment from 'moment'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../components/page/home.vue'],resolve)
    },
    {
      path: '/login/login',
      name: 'login',
      component: login
    },
    {
      path: '/login/register',
      name: 'register',
      component: register
    },
    {
      path: '/login/information',
      name: 'information',
      component: information
    },
    {
      path: '/login/userInfo',
      name: 'userInfo',
      component: userInfo
    },
    {
      path: '/article/article/:id',
      name: 'article',
      component: article
    }
  ]
})
