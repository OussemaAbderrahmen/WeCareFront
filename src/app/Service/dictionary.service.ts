import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dictionary } from '../components/forum/add-dictionary/add-dictionary.component';


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http:HttpClient) { }

  addWord(word:Dictionary){
    return this.http.post<Dictionary>("http://localhost:8089/wecare/forum/addword",word);
  }

  retrieveAllWords(){
    return this.http.get<Dictionary[]>(`http://localhost:8089/wecare/forum/getAllWord`)
  }

  retrieveWordById(wordId:number){
    return this.http.get<Dictionary>(`http://localhost:8089/wecare/forum/getWordById/${wordId}`)
  }

  updateWord(word:Dictionary,wordId:number){
    return this.http.put<Dictionary>(`http://localhost:8089/wecare/forum/update-word/${wordId}`,word)
  }
  deleteWord(id:number){
    return this.http.delete(`http://localhost:8089/wecare/forum/delete-word/${id}`)
     }
}