import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { CarShopingService } from './car-shoping.service';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleitemComponent } from './detalleitem/detalleitem.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    MenubarComponent,
    CatalogoComponent,
    DetalleitemComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2FilterPipeModule
  ],
  providers: [HttpService, CarShopingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
