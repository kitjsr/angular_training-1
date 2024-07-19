import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewnotice',
  standalone: true,
  imports: [],
  templateUrl: './viewnotice.component.html',
  styleUrl: './viewnotice.component.css'
})
export class ViewnoticeComponent {
  notices:any;
  constructor(private http:HttpClient){};
  ngOnInit(){
    this.http.get("http://www.gpadp.org.in/noticedata.php").subscribe(res=>{
      console.log(res)
      this.notices=res;
    })
  }
}
