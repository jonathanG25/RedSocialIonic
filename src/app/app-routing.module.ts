import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registro-stored',
    loadChildren: () => import('./pages/registro-stored/registro-stored.module').then( m => m.RegistroStoredPageModule)
  },
  {
    path: 'actualizar-stored',
    loadChildren: () => import('./pages/actualizar-stored/actualizar-stored.module').then( m => m.ActualizarStoredPageModule)
  },
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
