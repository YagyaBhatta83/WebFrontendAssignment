
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginPageComponent } from './login/login-page.component';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password-page.component';
import { RegisterPageComponent } from './register/register-page.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { AuthGuard } from "./auth-guard.service";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgot-password',
        component: ForgotPasswordPageComponent,
        data: {
          title: 'Forgot Password Page'
        }
      },
      {
        path: 'login',
        component: LoginPageComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'register',
        component: RegisterPageComponent,
        data: {
          title: 'Register Page'
        }
      }   ,
        {
        path: 'change-password',
        component: ChangePasswordComponent,
        data: {
          title: 'Change Password Page'
        },
        canActivate: [AuthGuard]
      },
       {
        path: 'reset-password/:token',
        component: ResetPasswordComponent,
        data: {
          title: 'Reset Password Page'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

