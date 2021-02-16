import Home from './pages/home/Home.vue';
import Store from './pages/store/Store.vue'

export const routes = [
  { path:'', name: 'home', component: Home, title: 'Home', menu: true },
  { path:'/store', name: 'store', component: Store, title: 'Cadastro', menu: true },
  { path: '*', component: Home, menu: false }
];
