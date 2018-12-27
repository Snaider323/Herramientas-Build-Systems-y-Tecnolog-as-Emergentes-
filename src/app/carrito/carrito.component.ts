import { Component, OnInit } from '@angular/core';
import { CarShopingService } from '../car-shoping.service';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carItems : any[] = [];
  total = 0;
  loading = false;
  error:string;
  constructor(private carShopingService : CarShopingService, private httpService : HttpService, private router: Router) { }

  ngOnInit() {
  	this.carItems = this.carShopingService.getCarShoping();
  	
  	for (var i = 0; i < this.carItems.length; i++) {
  		this.total += this.carItems[i].item.precio*this.carItems[i].cantidad;
  	}
  }

  pagar(){
    this.loading = true;
    let itemsUp = this.carShopingService.getArticulos();
    this.httpService.postDatos(itemsUp).subscribe(
      data => {
        if(data.updateMsg == "Ok") {
          this.carShopingService.setCarShoping();
          this.router.navigate(['/dash']);
        } else {
            this.error = data.updateMsg;
        }
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
