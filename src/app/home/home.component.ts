import { Component, OnInit, EventEmitter,ViewChild, ElementRef,Input,Output } from '@angular/core';
import 'setimmediate';
import { HomeServiceService } from './home-service.service';
import { ActivatedRoute,RouterModule, Router,NavigationEnd } from '@angular/router';
import { MenuServiceService } from '../menu/menu-service.service';
import { CommonService } from '../service/common.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datePickerConfig:Partial<BsDatepickerConfig>;
  imageUrlArray:any;
  userData:any;
 constructor(
  // private _localeService: BsLocaleService,
    public _CommonService:CommonService,
    public _homeService:HomeServiceService,
    private _Router: Router,
    public _ActivatedRoute:ActivatedRoute,
    private element: ElementRef,
    public _menuService: MenuServiceService,
    ) {
      this.userData={
        "data": {
          // "name": "",
          // "email": "",
          // "date": "",
          // "function": "",
          // "phone": "",
          // "place": ""
        },
      }
      this.imageUrlArray = [
        {url: "assets/Images/slider/02.jpg",caption:"First Image"},
        {url: "assets/Images/slider/01.jpg",caption:"second Image"},
        {url: "assets/Images/slider/03.jpg",caption:"third Image"},
        {url: "assets/Images/slider/04.jpg",caption:"fourth Image"},
        {url: "assets/Images/slider/05.jpg",caption:"fifth Image"},
        {url: "assets/Images/slider/06.jpg",caption:"sixth Image"},
      ];
      _Router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            const tree = _Router.parseUrl(_Router.url);
            if (tree.fragment) {
	        const element = document.querySelector("#" + tree.fragment);
	        if (element) { element.scrollIntoView(); }
            }
         }
    });
    
    this.datePickerConfig = Object.assign({},
      {
        containerClass:'theme-orange',
        showWeekNumbers:false,
        minDate:new Date(),
        dateInputFormat:'DD/MM/YYYY',
    });
    // _localeService.use('engb');
   }
  ngOnInit() {
  
  }
  goToMenu(){
    this._menuService.userDetails.data=this.userData.data;
    this._Router.navigate(['/menu']);
  }
}