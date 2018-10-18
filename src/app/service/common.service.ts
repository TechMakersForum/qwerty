import { Injectable,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const content = require('../../app/menulist.json');

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  about:any;
  constructor(private http:HttpClient) { }
  getData(){
    // make the call, but return the whole Observable object
    return content;
    // .pipe(map(data=>console.log("fjdfjdhfj")));
    
}

}


