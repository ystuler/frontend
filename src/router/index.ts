import { createRouter, createWebHistory } from 'vue-router'
import mainContainer from "../views/mainContainer.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: mainContainer },
    ]
})

export default router
