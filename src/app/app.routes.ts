import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { PrivateTemplat } from './+private/private-templat/private-templat';

export const routes: Routes = [
    {path:'login',component:LoginPage},
    {path:'private',component:PrivateTemplat,children:[

    ]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
