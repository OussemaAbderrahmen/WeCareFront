import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualityserviceService } from 'src/app/Service/actualityservice.service';
import { Publication } from '../publication';
import { theme } from '../theme';

@Component({
  selector: 'app-updatepub',
  templateUrl: './updatepub.component.html',
  styleUrls: ['./updatepub.component.scss']
})


export class UpdatepubComponent implements OnInit {

  p : Publication = new Publication();

  values = Object.keys(theme);
  id !: number ;
  pubs !: Publication;
  
  constructor(private myservice : ActualityserviceService,public router: Router,
    public route : ActivatedRoute, private  dialog:  MatDialog)
  { 
    

  }

  ngOnInit(): void {
 this.getpubyid();
  

  }
  
  updatepub(id?: number){
    console.log(this.p);
    this.myservice.updatepub(this.p).subscribe();
    this.router.navigate(['actuality']);
  }

  getpubyid(){
    this.myservice.getpubbyid().subscribe(data => {
      this.p = data ; 

    });
  }

}
