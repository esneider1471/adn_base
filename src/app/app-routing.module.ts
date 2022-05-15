import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/fabrica', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('@core/components/login/login.module').then(mod => mod.LoginModule) },
  { path: 'fabrica', loadChildren: () => import('@fabrica/fabrica.module').then(mod => mod.FabricaModule) },
  { path: 'factura', loadChildren: () => import('@factura/factura.module').then(mod => mod.FacturaModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
