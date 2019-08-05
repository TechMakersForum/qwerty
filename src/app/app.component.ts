import { Component } from '@angular/core';
import { CommonService } from './service/common.service';
import { HomeServiceService } from './home/home-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pathname:any;
  flag
  constructor(public commonService : CommonService,
    public _homeService:HomeServiceService,) { 
      this.pathname = new URL(window.location.href).pathname;
      console.log(this.pathname)
      if(this.pathname=='/admin' || this.pathname=='/admin/dashboard'){
        this.flag=true;
      }
      else{
        this.flag=false;
      }
    }
  title = 'varnam';
}
