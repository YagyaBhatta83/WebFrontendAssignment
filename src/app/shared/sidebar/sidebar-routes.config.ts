import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/dashboard/dashboard1', title: 'Dashboard1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]

    },




    { path: 'admin', title: 'Items', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
    { path: 'items/', title: 'View Items', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     { path: 'items/add', title: 'Add Item', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ] },


    { path: 'admin', title: 'Services', icon: 'ft-layers', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
    { path: 'services/', title: 'View Service', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         { path: 'services/add', title: 'Add Service', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
] },

    { path: 'schedules', title: 'Schedules', icon: 'ft-layers', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    { path: 'users', title: 'Users', icon: 'ft-layers', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },




];
