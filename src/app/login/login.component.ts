import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	model: any = {};
	loading = false;
  returnUrl: string;
  error:string;

  constructor(private httpService : HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
  	this.loading = true;

  	this.httpService.validarUsuario(this.model.email,this.model.password).subscribe(
  		data => {
        if(data.loginMsg == "Ok") {
          this.router.navigate(['/dash']);
        } else {
            this.error = data.loginMsg;
        }
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      }
  	);
  }

}
