import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: '', component: LoginComponent}, //default page
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '**', component: ErrorComponent} // ** means if any pages fail route to this one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
