import { Component } from '@angular/core';
import { CarShopingService } from './car-shoping.service';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleitemComponent } from './detalleitem/detalleitem.component';
import { CarritoComponent } from './carrito/carrito.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarShopingService],
})
export class AppComponent {
}
