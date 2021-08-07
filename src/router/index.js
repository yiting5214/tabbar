import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home') //index可省略
  },
  {
    path: '/class',
    name: 'class',
    component: () => import('@/views/class') //index可省略
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart') //index可省略
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user') //index可省略
  },

  {
    path: '*',
    redirect: '/home'
  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
