import { Component } from '@angular/core';


interface Details{
  name:String,
  roll:Number
}

@Component({
  selector: 'app-xyz',
  standalone: true,
  imports: [],
  templateUrl: './xyz.component.html',
  styleUrl: './xyz.component.css'
})
export class XyzComponent {
  // name:String="Esha Kumari";
  // roll:Number=10;
  // status:Boolean=true;
  // students:String[]=["a","b","c","d"];
  // details={
  //   "name":"xyz",
  //   "roll":123
  // };
  // details:{name:String,roll:Number}={
  //   "name":"xyz",
  //   "roll":123
  // };
  // details:Details={
  //   "name":"xyz",
  //   "roll":123
  // };
  // datas=[
  //   {
  //     "name":"Esha Kumari",
  //     "roll":1
  //   },
  //   {
  //     "name":"Anushruti",
  //     "roll":2
  //   }
  // ];
  isSuccess:Boolean=false;
  no=1;
  choice:Number=9;
  students:String[]=["Esha Kumari","Anushruti","Kali"]
}
