import Home from './components/home/Home.vue';
import Store from './components/store/Store.vue'

export const routes = [
  { path:'', component: Home, title: 'Home' },
  { path:'/store', component: Store, title: 'Cadastro' }
];
