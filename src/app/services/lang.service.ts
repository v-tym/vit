import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Injectable()
export class LangService{

   _lang: string;
  
  langClick: EventEmitter<string> = new EventEmitter();

  constructor (private location: Location) {
    if (this.location.path().split('/')[1] != null) {
      this._lang = this.location.path().split('/')[1];
    } 
    else {
      this._lang = "UA"; 
    }    
  }

  public radio(lang: string) {    
    this.langClick.emit(lang);
    this._lang = lang;   
  }

  public getLg () {
    return this._lang;    
  } 
}