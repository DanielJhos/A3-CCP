import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Home from '../views/Home.vue'
import Reclamação from '../views/Reclamação.vue'
import minhaReclamacao from '../views/MinhaReclamação.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/reclamacao',
    name: 'Reclamação',
    component: Reclamação
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/minhaReclamacao',
    name: 'minhaReclamacao',
    component: minhaReclamacao
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
