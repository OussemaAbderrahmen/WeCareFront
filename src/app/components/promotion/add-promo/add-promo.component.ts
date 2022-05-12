import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionService } from 'src/app/Service/promotion.service';
import { promotions } from '../promotion.component';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.scss']
})
export class AddPromoComponent implements OnInit {
  checked = true;
  id!: number;

  promotion!: promotions;
  constructor(
    private _router: Router,
    public promotionService: PromotionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.promotion = new promotions (this.id ,'' , new Date() , 0 );

  }

  addpromotion(){
    this.promotionService.addPromotion(this.promotion)
      .subscribe(
        data => {
          console.log(data)
          this._router.navigate(['promotion'])
        }
      )
  }


}