import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  myFun(){
    console.warn("This is a Warning!!");
  }
}
