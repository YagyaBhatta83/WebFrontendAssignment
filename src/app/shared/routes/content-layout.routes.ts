import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from 'app/pages/homepage/homepage.component';
import { LoginComponent } from 'app/client/login/login.component';
import { RegisterComponent } from 'app/client/register/register.component';
import { OrdersComponent } from 'app/pages/orders/orders.component';

import { AuthGuard } from './../auth/auth-guard.service';


//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: 'content-layout',
        loadChildren: () => import('../../pages/content-layout-page/content-pages.module').then(m => m.ContentPagesModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('../../auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'myorders',
        component: OrdersComponent
    }



];
