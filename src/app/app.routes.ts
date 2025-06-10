import { Routes } from '@angular/router';
import { startsWith } from '@onecx/angular-webcomponents';

export const standaloneRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./pages/detail/detail.module').then(m => m.DetailModule),
  },
];

export const remoteRoutes: Routes = [
  {
    matcher: startsWith(''),
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    matcher: startsWith('detail'),
    loadChildren: () =>
      import('./pages/detail/detail.module').then(m => m.DetailModule),
  },
];