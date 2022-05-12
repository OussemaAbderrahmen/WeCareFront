import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Cagnotte, CagnottesComponent, Donation, Drawal } from '../components/cagnottes/cagnottes.component';

@Injectable({
  providedIn: 'root'
})
export class CagnotteService {
 
  constructor(private http:HttpClient) { }

  getAllcagnottes(){
    return this.http.get<Cagnotte[]>('http://localhost:8089/wecare/cagnotte/get-all-cagnottes')
  }
  deletecagnotte(id:number){
    return this.http.delete(`http://localhost:8089/wecare/cagnotte/delete-cagnotte/${id}`)
  }
  deletedonation(id:number){
    return this.http.delete(`http://localhost:8089/wecare/donation/delete-donation/${id}`)
  }
  deletedrawal(id:number){
    return this.http.delete(`http://localhost:8089/wecare/drawal/delete-drawal/${id}`)
  }
  retrievecagnotte(id:number){
    return this.http.get<Cagnotte>(`http://localhost:8089/wecare/cagnotte/get-cagnotte-by-id/${id}`)
  }

  updateCagnotte(id:number,c:Cagnotte){
    return this.http.put(`http://localhost:8089/wecare/cagnotte/update-cagnotte/${id}`,c);

  }
  addcagnotte(c:Cagnotte){
    return this.http.post(`http://localhost:8089/wecare/cagnotte/add-cagnotte`,c);

  }
  getAlldonations(){
    return this.http.get<Donation[]>('http://localhost:8089/wecare/donation/get-all-donation')
  }
  getAlldonationsBycag(id:number){
    return this.http.get<Donation[]>(`http://localhost:8089/wecare/donation/get-all-donation/${id}`)
  }
  getAlldrawalsBycag(id:number){
    return this.http.get<Drawal[]>(`http://localhost:8089/wecare/drawal/get-all-drawals/${id}`)
  }


  addDonationtoCagnotte(id:number,d:Donation){
    return this.http.post(`http://localhost:8089/wecare/donation/add-donation-cag/${id}`,d);

  }
  addDonationtoCagnotteUser(idcag:number,iduser:string,d:Donation){
    return this.http.post(`http://localhost:8089/wecare/donation/add-donationtocagnotteuser/${iduser}/${idcag}`,d);
  }
  addDrawaltoCagnotte(id:number,d:Drawal){
    return this.http.post(`http://localhost:8089/wecare/drawal/add-drawal/${id}`,d);

  }
  findusernamebydon(id:number){
    return this.http.get<string>(`http://localhost:8089/wecare/donation/get-usernamefromdonation${id}`);
  }
}
