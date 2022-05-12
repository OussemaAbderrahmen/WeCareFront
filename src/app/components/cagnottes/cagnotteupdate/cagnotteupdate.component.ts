import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CagnotteService } from 'src/app/Service/cagnotte.service';
import { Cagnotte } from '../cagnottes.component';

@Component({
  selector: 'app-cagnotteupdate',
  templateUrl: './cagnotteupdate.component.html',
  styleUrls: ['./cagnotteupdate.component.scss']
})
export class CagnotteupdateComponent implements OnInit {
  checked = true;
  id!: number;
  cagnotte!: Cagnotte;
  constructor(
    private _router: Router,
    public cagnotteService: CagnotteService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cagnotte = new Cagnotte(this.id, '', '', '', false, 0, '', [], []);
    if (this.id != -1) {
      this.cagnotteService.retrievecagnotte(this.id)
        .subscribe(
          data => this.cagnotte = data
        )
    }
  }
  updateCagnotte() {
    this.cagnotteService.updateCagnotte(this.id, this.cagnotte)
      .subscribe(
        data => {
          console.log(data)
          this._router.navigate(['cagnotte'])
        }
      )
  }
}


