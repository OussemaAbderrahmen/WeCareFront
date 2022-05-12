import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActualityserviceService } from 'src/app/Service/actualityservice.service';
import { UploadFileService } from 'src/app/Service/upload-file.service';
import { User } from '../user/user';
import { PubComment } from './pubComment';
import { Publication } from './publication';
import { theme } from './theme';
import { HttpClient, HttpEventType } from '@angular/common/http';




@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.scss']


})
export class ActualityComponent implements OnInit {
  file! :File;
  selectedFile!: FileList;
  currentFile!: File;
  progress = 0;
  message = '';
  fileInfos!: Observable<any>;


  filter: any = '';
  terms! : any ;
  pub: Publication[] =[];

  com!: PubComment[];

  p : Publication = new Publication();

  values = Object.keys(theme);

  publication: any

  data : any

  user! : User;
  ps!: Publication;

  c : PubComment =new PubComment();

  likelist! :User[];

  constructor(private myservice : ActualityserviceService,public router: Router, private route :  ActivatedRoute, private uploadService: UploadFileService )
{ 

}



ngOnInit(): void {
  this.myservice.findAll().subscribe(responce=>{
    console.log(responce);
    this.pub = responce;}) 


    
}

newpub(){
  this.router.navigate(['addpub']);
}

addPublication(){
  console.log(this.p);
  this.myservice.addpub(this.p).subscribe();
  window.location.reload();

}


LikesList(idpost:number){
  this.myservice.getlikeslist(idpost).subscribe(res=> {
    this.likelist = res;
    console.log(this.likelist);
  })


}


Addpub(){
  
}
updatepubrecord(id: number){
  console.log("id" , id);
 this.router.navigate(['updatepub', id ]);
 this.myservice.getId(id);
}

deletepub(id : number){
this.myservice.deletepubs(id).subscribe();
window.location.reload();

}

deletecom(id:number){
  this.myservice.deletecomm(id).subscribe();
  window.location.reload();
}

likepub(idpost:number, iduser:number){
this.myservice.likePub(idpost,iduser).subscribe();


}

dislikepub(idpost:number, iduser:number){
  this.myservice.dislikePub(idpost,iduser).subscribe();
}


commentpub(idpost : number){
  
  this.myservice.findAllComments(idpost).subscribe(res=>{
    this.com = res;  
    console.log(this.com);
   
  
  })

}

likecomm(idcomm:number,iduser:number){
  this.myservice.likecomment(idcomm,iduser).subscribe();
}

dislikecomm(idcomm:number,iduser:number){
  this.myservice.dislikecomment(idcomm,iduser).subscribe();
}


displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }



displayStyle1 = "none";
openPopup1() {
  this.displayStyle1 = "block";
}
closePopup1() {
  this.displayStyle1 = "none";
}

displayStyle2 = "none";

openpopup2(){
  this.displayStyle2 = "block";
}

closePopup2() {
  this.displayStyle2 = "none";
}



displayStyle3 = "none";

openpopup3(){
  this.displayStyle3 = "block";
}

closePopup3() {
  this.displayStyle3 = "none";
}

addcomm(idpost:number,iduser:number){
  console.log(this.c);
  this.myservice.addcom(idpost,iduser,this.c).subscribe(
    response=>{
      console.log("adding a comment ..")
      this.myservice.findAllComments(idpost).subscribe(res=>{
          this.com = res;  
          console.log(this.com);
          this.ngOnInit()
        })
      }
    )
 
   }


    




  }
