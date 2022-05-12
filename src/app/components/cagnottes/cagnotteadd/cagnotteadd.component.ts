import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CagnotteService } from 'src/app/Service/cagnotte.service';
import { Cagnotte, TypeCagnotte } from '../cagnottes.component';

@Component({
  selector: 'app-cagnotteadd',
  templateUrl: './cagnotteadd.component.html',
  styleUrls: ['./cagnotteadd.component.scss']
})
export class CagnotteaddComponent implements OnInit {

  primaryMode:any;
  modesLabels=[
    TypeCagnotte.Aid,
    TypeCagnotte.Gift,
    TypeCagnotte.Others,
    TypeCagnotte.Ramadan
  ];
  id!:  number
  cagnotte!: Cagnotte;
  constructor(private _router: Router,
              public cagnotteService: CagnotteService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cagnotte = new Cagnotte(this.id,'','','',false,0,'',[],[]);
  }
  primaryModeChangeHandler(event:any) {
    console.log(this.primaryMode);    
  }
  addCagnotte(){
    this.cagnotte.image
    this.cagnotteService.addcagnotte(this.cagnotte)
      .subscribe(
        data => {
          console.log(data)
          this._router.navigate(['cagnotte'])
        }
      )
  }
}
