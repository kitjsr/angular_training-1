import { Component } from '@angular/core';
import { NoticeService } from '../../services/notice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newnotice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newnotice.component.html',
  styleUrl: './newnotice.component.css'
})
export class NewnoticeComponent {
  notices:any;
  constructor(private noticeService:NoticeService){}
  ngOnInit(){
    this.noticeService.getAll().subscribe(res=>{
      console.log(res)
      this.notices=res;
    })
  }
}
