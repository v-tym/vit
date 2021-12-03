import { Component, OnInit } from '@angular/core';
import { LangService } from '../services/lang.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {

  _lang: string;
  curentUrl: string;


  languages= [
    "UA",
    "RU",
    "EN"
  ]

  constructor(private langService: LangService,private router:Router ) { 
    this._lang = langService.getLg();
   }

  ngOnInit() {
    this.langService.langClick.subscribe(ln => {this._lang = ln} );
  }

  radioClick(lang: string) {
    
    this.langService.radio(lang);
    this._lang = lang;  
    this.curentUrl = this.router.url;
    var x2 = this.curentUrl.split("/");
    if (x2[2]!=undefined){
      var changeUrl = "/" + lang + "/" + x2[2];
    }
    else {
      var changeUrl = "/" + lang;
    } 

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([changeUrl]))
      }
    
  }

