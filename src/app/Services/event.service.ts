import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { eventt } from '../components/event/eventt';
import { espaceDt } from '../espace-user/espaceDt';



@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl ="http://localhost:8089/wecare/modifierEvent"
  id!: number
  event!:eventt

  constructor( private myhttp: HttpClient) {}
  

   public findAll():Observable<eventt[]>
   { return this.myhttp.get<eventt[]> ('http://localhost:8089/wecare/Events');
   }
   
    getId(getId:number){
      this.id=getId}

    public getEventbyId(id:number) :Observable<any>{
       return this.myhttp.get<any>('http://localhost:8089/wecare/Event'+"/"+id)}

    
    public AccepterEvent(idev:number, iduser:number) {
    return this.myhttp.post(`${'http://localhost:8089/wecare/AcceptEvent'}/${idev}/${iduser}`,null);}

     public eventuser(iduser:number):Observable<espaceDt[]> {
       return this.myhttp.get<espaceDt[]>('http://localhost:8089/wecare/lesEventsOfUser'+"/"+iduser) }
    
       public NoterEvent(note:number, idev:number, iduser:number) {
        return this.myhttp.post(`${'http://localhost:8089/wecare/noterevent'}/${note}/${idev}/${iduser}`,null);}
        public chartt():Observable<any>
        { return this.myhttp.get<any> ('http://localhost:8089/wecare/chartt');
        }

       //////////////////////////////////////////////////////////////////////////////////////////////
        public addEvent(event:eventt): Observable<Object>{
          return this.myhttp.post<Object>('http://localhost:8089/wecare/ajoutEvent',event)}
     
         public delete(id:number): Observable<number>{
           return this.myhttp.delete<number>('http://localhost:8089/wecare/supprimerEvent'+"/"+id)}
     
          
            
         public updateEvent(idj:any,event:eventt):Observable<Object>{
            return this.myhttp.put<Object>(`${'http://localhost:8089/wecare/modifierEvent'}/${idj}` ,event)
           }
           public deletebynote(): Observable<any>{
             return this.myhttp.delete<number>('http://localhost:8089/wecare/deletebynote')}
     
         public notesuperieur(): Observable<any>{
            return this.myhttp.get<any>('http://localhost:8089/wecare/event-superieur-note')}
             
         public userdeEvent():Observable<any>{
            return this.myhttp.get<any>('http://localhost:8089/wecare/user_de_event') }
            
         public profitnet(id:number):Observable<any>{
             return this.myhttp.get<any>('http://localhost:8089/wecare/budget'+"/"+id) }
     
         public EventRentable(): Observable<any>{
               return this.myhttp.get<any>('http://localhost:8089/wecare/meilleur_event_profit')}
     
         public TypeParticipe(name:any): Observable<any>{
         return this.myhttp.get<any>('http://localhost:8089/wecare/type-event-plusparticipe'+"/"+name)}
    
          BestUser():Observable<any>
          { return this.myhttp.get<any> ('http://localhost:8089/wecare/user_de_event');
        
          }
          rappel():Observable<any>
          { return this.myhttp.get<any> ('http://localhost:8089/wecare/rappel');
          }
          listemail():Observable<any>
          { return this.myhttp.get<any> ('http://localhost:8089/wecare/user_email_event');
          }
          
    
        

   
}
