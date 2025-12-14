import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { PrivateTemplat } from './+private/private-templat/private-templat';
import { MembersPage } from './+private/members-page/members-page';
import { Borrowspage } from './+private/borrowspage/borrowspage';
import { ReportsPage } from './+private/reports-page/reports-page';
import { DashboardPage } from './+private/dashboard-page/dashboard-page';
import { BooksPage } from './+private/books-page/books-page';
import { privateGuard } from './+shered/private-guard';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  {
    path: 'private',canActivate:[privateGuard],component: PrivateTemplat,children: [
      { path: 'books', component: BooksPage },
      { path: 'members', component: MembersPage },
      { path: 'borrows', component: Borrowspage },
      { path: 'reports', component: ReportsPage },
      { path: 'dashboard', component: DashboardPage },
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
