import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Services from '@/views/Services';
import Gallery from '@/views/Gallery';
import Partners from '@/views/Partners';
import Contacts from '@/views/Contacts';
import Login from '@/views/Login';
import BoardsMap from '@/views/BoardsMap';
import Clients from '@/views/Clients';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/boardsMap',
    name: 'BoardsMap',
    component: BoardsMap,
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
