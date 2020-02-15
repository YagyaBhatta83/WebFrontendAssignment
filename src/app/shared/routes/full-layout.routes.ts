import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  
  {
    path: 'full-layout',
    loadChildren: () => import('../../pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
  },
  
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('../../transactions/transactions.module').then(m => m.TransactionsModule)
  },
  {
    path: 'items',
    loadChildren: () => import('../../items/items.module').then(m => m.ItemsModule)
  },

  {
    path: 'services',
    loadChildren: () => import('../../services/services.module').then(m => m.ServicesModule)
  },

  {
    path: 'schedules',
    loadChildren: () => import('../../schedules/schedules.module').then(m => m.SchedulesModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../../users/users.module').then(m => m.UsersModule)
  }
];
