import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dictionary } from 'src/app/models/Dictionary';
import { DictionaryService } from 'src/app/Service/dictionaryService/dictionary.service';


@Component({
  selector: 'app-update-dictionary',
  templateUrl: './update-dictionary.component.html',
  styleUrls: ['./update-dictionary.component.scss']
})
export class UpdateDictionaryComponent implements OnInit {

  id !: number 
  word !: Dictionary 
  constructor( 
    public dictionaryService : DictionaryService,
    public route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.word=new Dictionary(this.id,"");
    if(this.id!=-1){
      this.dictionaryService.retrieveWordById(this.id).subscribe(
        
        data=>this.word=data
      )
    }
  }
  updateWord(){
    this.dictionaryService.updateWord(this.word,this.id).subscribe(
      data=>{
        console.log(data),
        this.router.navigate(['forum'])
      }
    )
  }

}
