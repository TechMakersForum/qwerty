import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from '../service/common.service';
import { CollapsibleModule } from 'angular2-collapsible';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuServiceService } from './menu-service.service';

const content = require('../../app/menulist.json');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  allDataContent:any;
  objectKeys = Object["keys"];

  constructor(public _commonService:CommonService,
    public _menuService: MenuServiceService,) { 
      
  }

  ngOnInit() {
    this.allDataContent=JSON.parse(JSON.stringify(content));
    window.scrollTo(0, 0);
  }
  submitOrder(){
    // window.open('https://www.instamojo.com/@techmakers')
    
    console.log(JSON.stringify(this._menuService.userDetails))
  }
  orderItem(header,item,isOrdered){
    if(isOrdered){
    if (this._menuService.userDetails.order[header].indexOf(item) >= 0) {
      this._menuService.userDetails.order[header].splice(this._menuService.userDetails.order[header].indexOf(item), 1);
    } else {
      this._menuService.userDetails.order[header].push(item);
    }
  } else {
    this._menuService.userDetails.order[header].splice(this._menuService.userDetails.order[header].indexOf(item), 1);
  }
  }
}
