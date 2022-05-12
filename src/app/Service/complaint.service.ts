import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import {
  Complaints,
  User,
} from "../components/complaints/complaints.component";
import { catchError, Observable, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ComplaintService {
  private baseUrl = "http://localhost:8089/wecare/complaint/";
  constructor(private http: HttpClient) {}
  retrieveAllComplaints() {
    return this.http.get<Complaints[]>(
      `${this.baseUrl}` + "get-all-complaints"
    );
  }

  retrieveMostComplainer() {
    return this.http.get<any>(`${this.baseUrl}` + "mostcomplainer");
  }

  getComplaintbyId(id: number): Observable<Complaints> {
    return this.http.get<Complaints>(
      `${this.baseUrl}get-complaint-by-id/${id}`
    );
  }
  retrieveUsers() {
    return this.http.get<User[]>(`${this.baseUrl}` + "get-all-users");
  }
  deleteComplaint(id: number) {
    return this.http.delete<Complaints>(
      `${this.baseUrl}delete-complaint/${id}`
    );
  }
  addComplaint(complaint: object): Observable<object> {
    return this.http.post(`${this.baseUrl}create-complaint/${1}`, complaint);
  }
  async statComplaint() {
    return this.http.get<Complaints>(`${this.baseUrl}` + "statcomplaint");
  }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append("file", file);
    const req = new HttpRequest("POST", `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: "json",
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
