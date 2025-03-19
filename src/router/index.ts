import { createRouter ,createWebHistory} from 'vue-router'

import Profile from '@/pages/Profile.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            name:'profile',
            path:'/profile',
            component:Profile
        },
    ]
})

export default router