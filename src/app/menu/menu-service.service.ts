import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  userDetails:any={};
  constructor() { 
    this.userDetails={
      "data": {
        "name": "",
        "email": "",
        "date": "",
        "function": "",
        "phone": "",
        "place": ""
      },
      order : {
        WELCOMEDRINK: [],
        SALADS: [],
        SOUPS: [],
        STARTERS: [],
        FIRSTCOURSE: [],
        BIRIYANI: [],
        NOODLES: [],
        RICE: [],
        CHICKEN: [],
        MUTTON: [],
        BEEF: [],
        FISH: [],
        EGG: [],
        VEGETABLE: []
      }
    };
  }
}
