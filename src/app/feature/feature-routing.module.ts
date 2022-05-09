import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';


const routes: Routes = [
  {
    path: 'fabrica',
    canActivate: [SecurityGuard],
    loadChildren: () => import('@fabrica/fabrica.module').then(mod => mod.FabricaModule)
  },
  { path: 'login', loadChildren: () => import('@login/login.module').then(mod => mod.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
