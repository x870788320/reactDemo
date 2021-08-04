import { lazy } from "react";
import { Redirect } from 'react-router-dom'


import { LOGIN_STATUS_HAS } from '@/store/actionTypes/index.type';

//exact是否需要权限认证，auth 需要权限认证的等级，在调用renderRoutes时定义
//注意路由放的顺序，优先匹配上面的路由
export const routes = [
    {
        path: '/login',
        name:'login',
        component: lazy(() => import('../pages/Login')),
    },
    {
      path: '/app',
      name: 'container',
      component: lazy(() => import('../container/HomeContainer')),
      routes: [
            {
                path: '/app/home',
                name:'home',
                component: lazy(() => import('../pages/Home')),
            },
            {
                path: '/app/mine',
                name:'mine',
                exact: true,
                auth: [ LOGIN_STATUS_HAS ],
                component: lazy(() => import('../pages/Mine')),
            },
            {
                path: '/app/:name',
                name:'404',
                component: lazy(() => import('../pages/404')),
            },
            {
                path: '/app',
                name:'home',
                component: lazy(() => import('../pages/Home')),
            },
      ],
    },
    {
        path: '/:name',
        name:'404',
        component: lazy(() => import('../pages/404')),
    },
    {
        path: '/',
        name:'/',
        render: () => <Redirect to="/app" />
    },
  ]



// export const routes = [
//     {
//         path: '/',
//         name:'container/home',
//         exact: true,
//         component: lazy(() => import('../container/HomeContainer')),
//     },
//     {
//         path: '/home',
//         name:'home',
//         exact: true,
//         auth: [2,3,4, 'v1'],
//         component: lazy(() => import('../container/HomeContainer')),
//     },
//     {
//         path: '/login',
//         name:'login',
//         component: lazy(() => import('../pages/Login')),
//     },
// ]
// export const homeRoutes = [
//     {
//         path: '/',
//         name:'home',
//         exact: true,
//         component: lazy(() => import('../pages/Home')),
//     },
//     {
//         path: '/home',
//         name:'home',
//         exact: true,
//         auth: [2,3,4, 'v1'],
//         component: lazy(() => import('../pages/Home')),
//     },
//     {
//         path: '/mine',
//         name:'mine',
//         component: lazy(() => import('../pages/Mine')),
//         exact: false,
//         auth: [2,3,4]
//     },
//     {
//         path: '/:name',
//         name:'404',
//         component: lazy(() => import('../pages/404')),
//     }
// ]





// //exact是否需要权限认证，auth 需要权限认证的等级，在调用renderRoutes时定义
// export const routes = [
//     {
//         path: '/',
//         name:'home',
//         exact: true,
//         component: lazy(() => import('../pages/Home')),
//     },
//     {
//         path: '/home',
//         name:'home',
//         exact: true,
//         auth: [2,3,4, 'v1'],
//         component: lazy(() => import('../pages/Home')),
//     },
//     {
//         path: '/mine',
//         name:'mine',
//         component: lazy(() => import('../pages/Mine')),
//         exact: false,
//         auth: [2,3,4]
//     },
//     {
//         path: '/login',
//         name:'login',
//         component: lazy(() => import('../pages/Login')),
//     },
//     {
//         path: '/:name',
//         name:'404',
//         component: lazy(() => import('../pages/404')),
//     }
// ]
