import { Component, OnInit } from '@angular/core';
import { CarShopingService } from '../car-shoping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalleitem',
  templateUrl: './detalleitem.component.html',
  styleUrls: ['./detalleitem.component.css']
})
export class DetalleitemComponent implements OnInit {
  articulo: any = {};

  constructor(private carShopingService : CarShopingService, private router: Router) { }

  ngOnInit() {
  	this.articulo = this.carShopingService.getItem();
  }

  volver() {
  	this.articulo = {};
  	this.router.navigate(['/dash']);
  }

}
