import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'browse',
    loadChildren: () => import('./components/browse/browse.module').then(m => m.BrowseModule)
  },{
    path: 'discover',
    loadChildren: () => import('./components/discover/discover.module').then(m => m.DiscoverModule)
  },{
    path: 'charts',
    loadChildren: () => import('./components/charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },{
    path: '',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
