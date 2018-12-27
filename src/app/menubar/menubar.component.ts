import { Component, OnInit } from '@angular/core';
import { CarShopingService } from '../car-shoping.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  carShoping : any[] = [];
  constructor(private carShopingService : CarShopingService) {
  }

  ngOnInit() {
  	this.carShoping = this.carShopingService.getCarShoping();
  }
}
