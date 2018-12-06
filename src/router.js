import Vue from 'vue'
import Router from 'vue-router'
import ToDo from './components/ToDo.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDo',
      component: ToDo
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})