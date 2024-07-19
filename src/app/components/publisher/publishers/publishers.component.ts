import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-publishers',
  standalone: true,
  imports: [],
  templateUrl: './publishers.component.html',
  styleUrl: './publishers.component.css'
})
export class PublishersComponent {
  publishers:any;
  constructor(private publisherService:PublisherService){};
  ngOnInit(){
    this.publisherService.getAll().subscribe(res=>{
      console.log(res)
      this.publishers=res;
    })
  }
}
