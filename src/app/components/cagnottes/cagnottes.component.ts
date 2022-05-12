import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CagnotteService } from 'src/app/Service/cagnotte.service';
import { User } from '../user/user.component';
export class Donation {
  constructor(
    public donationId: number,
    public amount: number,
    public dateDonation: Date,
    public cagnotte:Cagnotte,
    public user :User) { }
}
export class Drawal {
  constructor(
    public idWithdrawal: number,
    public ammount: number,
    public datewithdrawal: Date,
    public cagnotte:Cagnotte
    ) { }
}
export class Cagnotte {
  constructor(
    public cagnotteId: number,
    public cagnotteTitle: string,
    public cagnotteDescription: string,
    public typeCagnotte: string,
    public isActive: boolean,
    public moneyCollected: number,
    public image:string,
    public donations:Donation[],
    public drawals:Drawal[]) { }
}
export enum TypeCagnotte {
  Aid = 'Aid',
  Gift = 'Gift',
  Ramadan = 'Ramadan',
  Others = 'Others'
}
@Component({
  selector: 'app-cagnottes',
  templateUrl: './cagnottes.component.html',
  styleUrls: ['./cagnottes.component.scss']
})
export class CagnottesComponent implements OnInit {
  displayedColumns: string[] = [ 'title', 'description', 'moneycollected', 'action'];
  cagnotteList: Cagnotte[] = [];
  p:number=1
  constructor(
    public cagnotteService: CagnotteService,
    public router: Router) { }
  ngOnInit(): void {
    this.cagnotteService.getAllcagnottes().subscribe(
      response => {
        console.log(response);

        this.cagnotteList = response;
      }
    );
  }
  message = "";
  deletecagnotte(id: number) {
    console.log(`delete cagnotte ${id}`);
    this.cagnotteService.deletecagnotte(id).subscribe(
      response => {
        console.log(response);
        this.message = `  cagnotte ${id} deleted successfully `;
        this.cagnotteService.getAllcagnottes().subscribe(
          response => {
            console.log(response);
            this.cagnotteList = response;
          });
      })
  }
  updatecagnotte(id: number) {
    this.router.navigate(['cagnotteupdate', id])
  }
  addcagnotte() {
    this.router.navigate(['cagnotteadd'])
  }
  getcagnottebyid(id:number){
    this.router.navigate(['retrievecagnotte',id])
  }
}