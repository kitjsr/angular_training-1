import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-addcategory',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  reg:FormGroup=new FormGroup({
    name:new FormControl<String>(''),
  });
  submitted=false;
  publisher={
    name:"",
  };
  constructor(private formBuilder:FormBuilder , private categoryService:CategoryService){}
  ngOnInit(){
    this.reg=this.formBuilder.group({
      name:['',Validators.required],
    })
  };
  get f():{[key:string]:AbstractControl}{
    return this.reg.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.reg.invalid){
      return;
    }
    this.categoryService.create(this.reg.value).subscribe(reg=>{
      console.log("Successfully added")
    })
    console.log(JSON.stringify(this.reg.value,null,2));
  }
}
