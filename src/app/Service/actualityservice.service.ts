import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../components/actuality/publication';
import { theme } from '../components/actuality/theme';
import { User } from '../components/user/user';
import { PubComment } from '../components/actuality/pubComment';


@Injectable({
  providedIn: 'root'
})
export class ActualityserviceService {
 

id! : number ; 
pub! : Publication[];
th! :theme;
u!: User;
com!: PubComment[];




  constructor(private http : HttpClient) { 
   
  }

 getId(getId : number) 
 {
  this.id = getId;
 }


public getpubbyid() : Observable<any>
{
return this.http.get<any>('http://localhost:8089/wecare/actuality/get-pub' +"/"+this.id)
}


public getlikeslist (idpost:number) : Observable<any> {

  return this.http.get<any>(`${'http://localhost:8089/wecare/actuality/likeslist'}/${idpost}`)
}

public updatepub( pb:Publication): Observable<Object>
{
  return this.http.put<Object>('http://localhost:8089/wecare/actuality/update-pub'+"/"+ this.id , pb);
}

public deletepubs(id: number): Observable<number>
{
  return this.http.delete<number>('http://localhost:8089/wecare/actuality/remove-pub'+"/"+id);
}

public bestpub() : Observable<any>
{
  return this.http.get<any>('http://localhost:8089/wecare/actuality/bestpubbymonth')
}

public worstpub() : Observable<any>
{
  return this.http.get<any>('http://localhost:8089/wecare/actuality/worstpubbymonth')

}

public activeuser() : Observable<any>
{
  return this.http.get<any>('http://localhost:8089/wecare/actuality/activeUser')

}

public mostcommentedPost() : Observable<any>
{
  return this.http.get<any>('http://localhost:8089/wecare/actuality/worstpubbymonth')

}

public findAll()

{
  return this.http.get<Publication[]>('http://localhost:8089/wecare/actuality/get-allpubsdate');
}


public addpub(pb?:Publication) : Observable<Object>
{
return this.http.post<Object>('http://localhost:8089/wecare/actuality/create-pub', pb);
}

public likePub(idpost:number,iduser:number)
{
  return this.http.post(`${'http://localhost:8089/wecare/actuality/likepost'}/${idpost}/${iduser}`,null);
}

public dislikePub(idpost:number,iduser:number)
{
  return this.http.post(`${'http://localhost:8089/wecare/actuality/Dislikepost'}/${idpost}/${iduser}`,null)
}

public  findAllComments(idpost:number ) 

{
  return this.http.get<PubComment[]>(`${'http://localhost:8089/wecare/actuality/get-allpubsCommdate'}/${idpost}`)
}

public likecomment(idcomm:number,iduser:number)
{
  return this.http.post(`${'http://localhost:8089/wecare/actuality/likeComment'}/${idcomm}/${iduser}`,null);
}

public dislikecomment(idcomm:number,iduser:number)
{
  return this.http.post(`${'http://localhost:8089/wecare/actuality/DislikeComment'}/${idcomm}/${iduser}`,null);
}

public deletecomm(id: number): Observable<number>
{
  return this.http.delete<number>('http://localhost:8089/wecare/actuality/remove-comment'+"/"+id);
}

public addcom(idpost:number,iduser:number, cm?:PubComment) : Observable<Object>
{
return this.http.post<Object>(`${'http://localhost:8089/wecare/actuality/add-comment'}/${idpost}/${iduser}`,cm );
}







}
