import Home from './pages/home/Home.vue';
import Store from './pages/store/Store.vue'

export const routes = [
  { path:'', component: Home, title: 'Home' },
  { path:'/store', component: Store, title: 'Cadastro' }
];
