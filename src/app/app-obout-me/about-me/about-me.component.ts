import { Component, OnInit, Injectable } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [],
})

@Injectable()
export class AboutMeComponent implements OnInit {

  experience = [];
  ln: string;

  private yearB:number = new Date(1991, 8, 22).getFullYear();
  private dateNow:number = new Date().getFullYear();
  public myFullYear:number = this.dateNow - this.yearB;

  constructor(private ls: LangService) {
    this.ln = this.ls.getLg();
  }

  ngOnInit( ) {   
    this.ls.langClick.subscribe(m => this.ln = m);
  }
  
}
