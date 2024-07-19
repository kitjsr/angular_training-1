import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AddPublisherService } from '../../../services/addpublisher.service';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-add-publisher',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-publisher.component.html',
  styleUrl: './add-publisher.component.css'
})
export class AddPublisherComponent {
  reg:FormGroup=new FormGroup({
    name:new FormControl<String>(''),
    mobile:new FormControl<String>(''),
    email:new FormControl<String>(''),
    address:new FormControl<String>(''),
  });
  submitted=false;
  publisher={
    name:"",
    mobile:"",
    email:"",
    address:"",
  };
  constructor(private formBuilder:FormBuilder, private publiserService:PublisherService){}
  ngOnInit(){
    this.reg=this.formBuilder.group({
      name:['',Validators.required],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$")
        ],
      ],
      email:['',[Validators.required,Validators.email,]],
      address:['',Validators.required],
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
    this.publiserService.create(this.reg.value).subscribe(reg=>{
      console.log("Successfully added")
      
    })
    console.log(JSON.stringify(this.reg.value,null,2));
  }
}
