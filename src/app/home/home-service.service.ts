import { Injectable,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute,RouterModule, Router,NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  
  sectionScroll:any;
  constructor(private _Router: Router,) { }

  internalRoute(routerLink,idElement){
    this.sectionScroll=idElement;
    this._Router.navigate([routerLink], {fragment: idElement});
  }


}
