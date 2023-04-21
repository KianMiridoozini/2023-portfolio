import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyWorks from '../views/MyWorks.vue'
import Contacts from '../views/Contacts.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/MyWorks',
      name: 'MyWorks',
      component: MyWorks },
    { path: '/Contacts',
      name: 'Contacts',
      component: Contacts },
  ]
})


export default router



