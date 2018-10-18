import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import 'setimmediate';
import { HomeServiceService } from './home-service.service';
import { ActivatedRoute,RouterModule, Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public _homeService:HomeServiceService,
    private _Router: Router,
    public _ActivatedRoute:ActivatedRoute,
    ) { }
  ngOnInit() {
    // this._homeService.sectionScroll=this._Router.url.replace('/#','')
    this._Router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScroll();
      this._homeService.sectionScroll= null;
    });
  }
  
  doScroll() {

    if (!this._homeService.sectionScroll) {
      return;
    }
    try {
      var elements = document.getElementById(this._homeService.sectionScroll);
      elements.scrollIntoView();
    }
    finally{
      this._homeService.sectionScroll = null;
    }
  } 


}
