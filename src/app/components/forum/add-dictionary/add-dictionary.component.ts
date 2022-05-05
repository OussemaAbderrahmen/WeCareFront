import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dictionary } from 'src/app/models/Dictionary';

import { DictionaryService } from '../../../Service/dictionaryService/dictionary.service';

@Component({
  selector: 'app-add-dictionary',
  templateUrl: './add-dictionary.component.html',
  styleUrls: ['./add-dictionary.component.scss']
})
export class AddDictionaryComponent implements OnInit {
  id !: number;
  word !: Dictionary;

  constructor(public dictionaryService : DictionaryService,
    public route : ActivatedRoute,
    private router : Router ) { }

  ngOnInit(): void {
    this.word = new Dictionary(this.id,"");
  }


  addWord(){
  
    this.dictionaryService.addWord(this.word).subscribe(
      data=>{
        console.log(data),
        this.router.navigate(['forum'])})  
  } 
}
