import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories:any;
  constructor(private categoryService:CategoryService){};
  ngOnInit(){
    this.categoryService.getAll().subscribe(res=>{
      console.log(res)
      this.categories=res;
    })
  }
}
