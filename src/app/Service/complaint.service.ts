import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complaints } from '../components/complaints/complaints.component';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }
  retrieveAllComplaints(){
    return this.http.get<Complaints[]>(' http://localhost:8089/wecare/complaint/get-all-complaints/')
  }
  deleteComplaint(id:number){
    return this.http.delete<Complaints>(` http://localhost:8089/wecare/complaint/delete-complaint/${id}`)
  }
}
