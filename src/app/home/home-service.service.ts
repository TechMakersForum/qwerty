import { Injectable,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute,RouterModule, Router,NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  
  constructor(private _Router: Router,) { }

  internalRoute(routerLink,idElement){
    this._Router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
    this._Router.navigate([routerLink], {fragment: idElement}));
  }


}
