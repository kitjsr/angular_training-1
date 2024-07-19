import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url="http://www.gpadp.org.in/noticedata.php";

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(url);
  }
}
