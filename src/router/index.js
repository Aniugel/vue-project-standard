import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import group from './group'
import city from './city'
import broadcast from './broadcast'
import mine from './mine'
import audio from './audio'

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('@/views/home')
        },
        // 其他用路由
        group, city, broadcast, mine, audio,
        {
            path: '*',
            name: 'not-found',
            component: () =>
                import ('@/views/not-found')
        }
    ]
})