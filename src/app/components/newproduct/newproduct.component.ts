import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newproduct',
  standalone: true,
  imports: [],
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.css'
})
export class NewproductComponent {
  products:any;
  constructor(private http:HttpClient){};
  ngOnInit(){
    this.http.get("https://fakestoreapi.com/products/").subscribe(res=>{
      console.log(res)
      this.products=res;
    })
  }
}
