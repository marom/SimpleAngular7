import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  serviceMethod() {
    console.log('clicked');
  }
}
