import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./components/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./components/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'alerta',
    loadChildren: () => import('./components/alerta/alerta.module').then( m => m.AlertaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
