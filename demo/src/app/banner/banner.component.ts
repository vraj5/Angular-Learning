import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
// export class BannerComponent implements OnInit {
export class BannerComponent{
  name = "Angular Sum Project !!"
  fcolor = `"red"`


  getSum(fnum:number, snum:number){
    let desc = "Sum of " + fnum + " + " + snum + " = ";
    console.log('desc :', desc);
    let sum = fnum + snum;
    console.log('sum :', sum);
    let total = desc + sum;
    alert(total);
  }

  data:any

  constructor(ts:TestService){
    ts.myFun()
  }
}

