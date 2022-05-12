import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintService } from 'src/app/Service/complaint.service';
import { Complaints } from '../complaints/complaints.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.scss']
})
export class AddComplaintComponent implements OnInit {

  @ViewChild('recaptcha', {static: true }) recaptchaElement!: ElementRef;

  siteKey:string;
  constructor(private complaintservice:ComplaintService) { this.siteKey="6LchYKcfAAAAAICZScgofSyTDKRijkqfXZrhYOck"}
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  progress = 0;
     complaint : Complaints=new Complaints();  
     submitted = false;  
     fileInfos?: Observable<any>;


    selectFile(event: any): void {
      this.selectedFiles = event.target.files;
    }

  
  ngOnInit(): void {
    this.submitted=false;  
    this.fileInfos = this.complaintservice.getFiles();


  }
    complaintsaveform=new FormGroup({  
    complaintDescription:new FormControl('' , [Validators.required  ] ),  
    complaintImage:new FormControl(),  
    status:new FormControl(),
    complaintDate:new FormControl()
  });  


    
  

  
  get complaintDescription(){  
    return this.complaintsaveform.get('complaintDescription');  
  }  
  
  get complaintImage(){  
    return this.complaintsaveform.get('complaintImage');  
  }  
  
  get status(){  
    return this.complaintsaveform.get('status');  
  }  
  get complaintDate(){  
    return this.complaintsaveform.get('complaintDate');  
  }  
  


  saveComplaint(): void {
    const data = {
      complaintDescription: this.complaint.complaintDescription,
      complaintImage: this.complaint.complaintImage,
      complaintType: this.complaint.complaintType,
      status: this.complaint.status,
      complaintDate: this.complaint.complaintDate,


    };
    this.complaintservice.addComplaint(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newComplaint(): void {
    this.submitted = false;
    this.complaint = {
      complaintId : 0,
      complaintDate :   new Date(500000000000) ,
      complaintDescription: '',
      complaintImage: '',
      complaintType: '',
      status: false
    };
  }


upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.complaintservice.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.complaintservice.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }

  
}  


