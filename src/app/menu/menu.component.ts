import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from '../service/common.service';
import { CollapsibleModule } from 'angular2-collapsible';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuServiceService } from './menu-service.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

const content = require('../../app/menulist.json');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  datePickerConfig:Partial<BsDatepickerConfig>;

  allDataContent:any;
  objectKeys = Object["keys"];

  constructor(public _commonService:CommonService,
    public _menuService: MenuServiceService,) { 
      // this.loadScripts();
      this.datePickerConfig = Object.assign({},
        {
          containerClass:'theme-orange',
          showWeekNumbers:false,
          minDate:new Date(),
          dateInputFormat:'DD/MM/YYYY',
      });
  
      
  }
  loadScripts() {
    const dynamicScripts = [
     'https://js.instamojo.com/v1/button.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      // console.log(document.getElementsByClassName('abc'))
      document.getElementsByClassName('abc')[1].appendChild(node);
    }
  }
  ngOnInit() {
    this.allDataContent=JSON.parse(JSON.stringify(content));
    window.scrollTo(0, 0);
    
  }
  submitOrder(){
    //  window.open('https://www.instamojo.com/@techmakers/ledfc18f0805f466bac1d614ab388720e/')
    alert("success")
    // console.log(JSON.stringify(this._menuService.userDetails))
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
