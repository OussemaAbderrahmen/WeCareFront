import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promotions } from '../components/promotion/promotion.component';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) { }

  getAllPromotions(){
    return this.http.get<promotions[]>('http://localhost:8089/wecare/promotion/get-all-promotion')
  }
  deletePromotion(id:number){
    return this.http.delete(`http://localhost:8089/wecare/promotion/delete-promotion/${id}`)
  }
  retrievePromotion(id:number){
    return this.http.get<promotions>(`http://localhost:8089/wecare/promotion/get-promotion-by-id/${id}`)
  }
  updatePromotion(id:number,p:promotions){
    return this.http.put(`http://localhost:8089/wecare/promotion/update-promotion${id}`,p);

  }
  addPromotion(p:promotions){
    return this.http.post(`http://localhost:8089/wecare/promotion/add-promotion`,p);

  }


}