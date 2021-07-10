import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

const routes : Routes = [
  {path : 'sign-in' , component : SignInComponent},
  {path : 'signup' , component : SignUpComponent},
  {path : '' , component : SignInComponent},
]

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),LayoutModule
  ]
})
export class LoginModule { }
