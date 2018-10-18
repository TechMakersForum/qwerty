import { Component } from '@angular/core';
import { CommonService } from './service/common.service';
import { HomeServiceService } from './home/home-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public commonService : CommonService,
    public _homeService:HomeServiceService,) { }
  title = 'varnam';
}
