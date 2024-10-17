import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
    
    /* {
        path: '',
        component: BlankComponent,
        children: [
          {
            path: 'authentication',
            loadChildren: () =>
              import('./pages/authentication/authentication.module').then(
                (m) => m.AuthenticationModule
              ),
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'authentication/error',
      }, */
];
