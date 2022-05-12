import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from 'src/app/Service/promotion.service';

export class promotions {
  constructor(
   public promotionId:number,
   public promotionTitle:string,
   public promotionDate:Date,
   public userReact:number,

  ){ }
}

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})

export class PromotionComponent implements OnInit {
  displayedColumns: string[] = [   'promotionTitle' , 'action' ];

  promotionList : promotions[] = [];

  constructor(public promotionService:PromotionService ,
    public router : Router) { }

    ngOnInit(): void {
      this.promotionService.getAllPromotions().subscribe(
        response=>{
          console.log(response);
          this.promotionList=response;
 
        }
      );
     }
     message="";
     deletePromotion(id: number){
       console.log(`delete promotion ${id}`);
       this.promotionService.deletePromotion(id).subscribe(
         response=>{
           console.log(response);
           this.message =   `promotion ${id} deleted successfully` ;
          this.promotionService.getAllPromotions().subscribe(
             response => {
               console.log(response);
             this.promotionList=response;
            });   
        })

      }
      updatePromotion(id:number){
        console.log(`update ${id}`)
        this.router.navigate(['updatePromotion',id])
      }
    
     addPromotion(){
       this.router.navigate(['addpromotion'])
     
    }
    }
