import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { CollapsibleModule } from 'angular2-collapsible';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const content = require('../../app/menulist.json');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ItemList
  ItemKey=[];
  IfitemSelect;
  allDataContent:any;
  objectKeys = Object["keys"];
  rotateArrow: boolean = false;
  constructor(private data:CommonService) { 
    // this.func();
  }

  ngOnInit() {
    this.allDataContent=JSON.parse(JSON.stringify(content));
    
    console.log(this.allDataContent)
  }
  func(){
    this.ItemList= this.data.getData()
    console.log("ItemList",this.ItemList);
    for (let key in this.ItemList){
      this.ItemKey.push(key);
      console.log("keys",key);
    }
  }
  showlist(key){
    console.log("key picked",key);
    this.IfitemSelect=this.ItemList[key];
    console.log("selected",this.ItemList[key]);
    
    
  }
  
  
  
}
