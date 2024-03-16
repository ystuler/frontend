import {createRouter, createWebHistory} from 'vue-router'
import MainView from '../views/MainView.vue'
import GroupSelectionView from "../views/GroupSelectionView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainView
        },
        {
            path: '/group',
            component: GroupSelectionView
        },

    ]
})

export default router
