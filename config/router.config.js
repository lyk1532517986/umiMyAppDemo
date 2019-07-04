export default [
    {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
            {
                path: '/',
                component: 'index',
            },
            {
                path: '/less',
                component: 'css-modules-with-less/index',
            },
            {
                path: '/antdButton',
                component: 'css-modules-with-antd/index',
            },
            {
                path: '/helloworld',
                component: 'Helloworld'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
            { path: 'puzzlecards', component: './puzzlecards' },
            { path: 'list', component: './list' },
            { path: 'upload', component: './upload' },
            { path: 'download', component: './download' },
            { path: 'locale', component: './locale' },
            { path: 'tsDemo', component: './tsDemo' },
        ]
    },
    {
        path: '/login',
        component: './login',
    }
];
