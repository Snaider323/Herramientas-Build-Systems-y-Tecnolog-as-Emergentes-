import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CarShopingService } from '../car-shoping.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
	articulos : any[] = [];
	articuloFilter: any = {nombre: ''};
	cantidadAdd;

  constructor(private carShopingService : CarShopingService, private router: Router, private httpService : HttpService) {}

  ngOnInit() {
    this.articulos = this.carShopingService.getArticulos();
    if(this.articulos.length == 0) {
      this.httpService.allArticulos().subscribe(
        data => {
          this.articulos = data;
          this.carShopingService.setArticulos(this.articulos);
        }, error => {
          console.log(error);
        }
      );
    }
  }

  verMas(articuloSel) {
    this.carShopingService.setItem(articuloSel);
    this.router.navigate(['/dash/detalleitem']);
  }

  addCanasta(articuloSel) {
    if(!isNaN(this.cantidadAdd)) {
      this.carShopingService.setItem(articuloSel);
      this.carShopingService.agregarItemShoping(this.cantidadAdd);
    }
  }
}
