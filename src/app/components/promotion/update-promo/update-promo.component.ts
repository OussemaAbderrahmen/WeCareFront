import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionService } from 'src/app/Service/promotion.service';
import { promotions } from '../promotion.component';

@Component({
  selector: 'app-update-promo',
  templateUrl: './update-promo.component.html',
  styleUrls: ['./update-promo.component.scss']
})
export class UpdatePromoComponent implements OnInit {

  checked = true;
  id!: number;

  promotion!: promotions;
  constructor(
    public router: Router,
    public promotionService: PromotionService,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.promotion = new promotions (this.id ,'' ,new Date() , 0);
    if (this.id != -1) {
      this.promotionService.retrievePromotion(this.id)
        .subscribe(
          data => this.promotion = data
        )
    }
  }
  updatepromotion() {
    //update user
    this.promotionService.updatePromotion(this.id, this.promotion)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['promotion'])
        }
      )
  }

}

