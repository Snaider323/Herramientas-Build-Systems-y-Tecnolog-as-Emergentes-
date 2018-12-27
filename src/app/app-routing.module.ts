import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleitemComponent } from './detalleitem/detalleitem.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent,
    children: [
      { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
      { path: 'catalogo', component: CatalogoComponent },
      { path: 'detalleitem', component: DetalleitemComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'menuBar', component: MenubarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
