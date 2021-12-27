export default {
    path: '/mine',
    name: 'mine',
    component: () =>
        import ('@/views/mine'),
    //配置二级路由
    // children: [
    //     { path: '', redirect: 'list' },
    //     {
    //         path: '/list',
    //         name: 'list',
    //         component: () =>
    //             import ('@/views/Mine/list')
    //     },
    //     {
    //         path: 'car',
    //         name: 'car',
    //         component: () =>
    //             import ('@/views/Mine/car')
    //     },
    // ]
}