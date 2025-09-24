import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import SobreMim from '../pages/SobreMim.vue'
import Habilidades from '../pages/Habilidades.vue'
import Projetos from '../pages/Projetos.vue'
import Contato from '../pages/Contato.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/SobreMim', component: SobreMim },
  { path: '/Habilidades', component: Habilidades},
  { path: '/Projetos', component: Projetos},
  { path: '/Contato', component: Contato}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router