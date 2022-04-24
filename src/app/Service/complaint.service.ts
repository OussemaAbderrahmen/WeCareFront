import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Complaints } from '../components/complaints/complaints.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private baseUrl = 'http://localhost:8089/wecare/complaint/'
  constructor(private http:HttpClient) { }
  retrieveAllComplaints(){
    return this.http.get<Complaints[]>(`${this.baseUrl}`+'get-all-complaints');  
  }
  deleteComplaint(id:number){
    return this.http.delete<Complaints>(`${this.baseUrl}delete-complaint/${id}`);  
  }
  addComplaint(complaint: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}create-complaint/${1}`, complaint);  
  }  
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {

      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
