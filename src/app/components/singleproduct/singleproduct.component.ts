
import { Component } from '@angular/core';
import { SingleproductService } from '../../services/singleproduct.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
  // products:any;
  // constructor(private http:HttpClient){};
  // ngOnInit(){
  //   this.http.get("https://fakestoreapi.com/products/1").subscribe(res=>{
  //     console.log(res)
  //     this.products=res;
  //   })
  // }
  products:any;
  constructor(private singleproductService:SingleproductService){}
  ngOnInit(){
    this.singleproductService.getAll().subscribe(res=>{
      console.log(res)
      this.products=res;
    })
  }
}
