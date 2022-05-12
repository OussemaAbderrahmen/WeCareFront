import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CagnotteService } from 'src/app/Service/cagnotte.service';
import { UserService } from 'src/app/Service/user.service';
import { User } from '../../user/user.component';
import { Cagnotte, Donation, Drawal } from '../cagnottes.component';

@Component({
  selector: 'app-retrievecagnotte',
  templateUrl: './retrievecagnotte.component.html',
  styleUrls: ['./retrievecagnotte.component.scss']
})
export class RetrievecagnotteComponent implements OnInit {
  displayedColumns: string[] = ['amount', 'date', 'action'];
  displayedColumns2: string[] = ['ammount', 'date', 'action'];
  id!: number;
  id2!: number;
  cagnotte!: Cagnotte;
  donation!: Donation;
  drawal!: Drawal;
  drawalList!: Drawal[];
  donationList!: Donation[];
  id3: string;
  user: User;
  constructor(
    private _router: Router,
    public cagnotteService: CagnotteService,
    private route: ActivatedRoute,
    public userservice:UserService) { }

  ngOnInit(): void {
    this.donation = new Donation(this.id, 0, new Date(), this.cagnotte,this.user)
    this.drawal = new Drawal(this.id2, 0, new Date(), this.cagnotte)
    this.id = this.route.snapshot.params['id'];
    this.cagnotte = new Cagnotte(this.id, '', '', '', false, 0, '', [], []);
    
    /////////////
    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'))
    ////////////
    this.id3 = userData.id;
    if (this.id != -1) {
      this.cagnotteService.getAlldonationsBycag(this.id)
        .subscribe(
        
          data =>{
            this.donationList = data
            console.log(data);
            
              
             })
           
           
        
      this.cagnotteService.getAlldrawalsBycag(this.id)
        .subscribe(
          data2 => this.drawalList = data2
        )
      console.log(this.drawal)
      this.cagnotteService.retrievecagnotte(this.id)
        .subscribe(
          data => this.cagnotte = data
        )
    }
  }
  message = "";
  deletedonation(id: number) {
    if (window.confirm("Are you sure ?")) {
      console.log(`delete donation ${id}`);
      this.cagnotteService.deletedonation(id).subscribe(
        response => {
          window.location.reload();
        })
    }
  }
  deletedrawal(idd: number) {
    if (window.confirm("Are you sure ?")) {
      console.log(`delete drawal ${idd}`);
      this.cagnotteService.deletedrawal(idd).subscribe(
        response => {
          window.location.reload();
        })
    }
  }
  addDonationtoCagnotte(id: number) {
    this.cagnotteService.addDonationtoCagnotte(id, this.donation)
      .subscribe(
        data => {
          window.location.reload();
        }
      )
  }
  addDonationtoCagnottetouser(id: number) {
    this.cagnotteService.addDonationtoCagnotteUser(id, this.id3, this.donation)
      .subscribe(
        data => {
          window.location.reload();
        }
      )
  }
  addDrawaltoCagnotte(id: number) {
    this.cagnotteService.addDrawaltoCagnotte(id, this.drawal)
      .subscribe(
        data => {
          window.location.reload();
        }
      )
  }
  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}


