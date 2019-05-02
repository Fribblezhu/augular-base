import {Routes} from '@angular/router';
import {SimpleLayoutComponent} from './layout/simple-layout/simple-layout.component';
import {LoginComponent} from './login/login.component';
import {CommonGuard} from './core/guard/common.guard';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: SimpleLayoutComponent,
    data: {title: 'Root'},
    children: [
      {
        path: '',
        component: LoginComponent,
        canActivate: [CommonGuard]
      }
    ]
  },
];
