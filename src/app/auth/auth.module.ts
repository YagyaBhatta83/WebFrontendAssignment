import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginPageComponent } from './login/login-page.component';
    
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password-page.component';

import { RegisterPageComponent } from './register/register-page.component';

import { AuthRequestService } from './services/auth_request.services';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { AuthGuard } from "./auth-guard.service";





@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule        
    ],
    declarations: [
        ForgotPasswordPageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        ChangePasswordComponent,
        ResetPasswordComponent
    ],
    providers: [AuthRequestService,AuthGuard]
})
export class AuthModule { }
