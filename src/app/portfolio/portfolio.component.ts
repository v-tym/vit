import { Component, OnInit } from '@angular/core';
import { LangService } from '../services/lang.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl:'./portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  _lang: string;

  constructor(private langService: LangService,private meta: Meta,private title: Title) {   
    title.setTitle('tyt title2');

    meta.addTags ([
      {
        name: 'autor', content: 'vit.mk.ua'
      }
    ])
  }
  
  ngOnInit() {
    this.langService.langClick.subscribe(ln => {this._lang = ln}); 
    this._lang = this.langService.getLg(); 
    
    if (this._lang == "RU") {
      this.title.setTitle('Портфолио работ КМД');
      this.meta.addTags ([  
        {
          name: 'keywords', content: 'Портфолио КМД, Пример КМД, Модель стальных конструкций'
        },
        {
          name: 'description', content: 'Проектирование и разработка КМД, машин и механизмов(машиностроение). Инженерные услуги.'
        },
      ])
    } else if (this._lang == "UA") {
      this.title.setTitle('Портфоліо робіт КМД');
      this.meta.addTags ([  
        {
          name: 'keywords', content: 'Портфоліо КМД, Приклад КМД, Модель сталевих конструкцій'
        },
        {
          name: 'description', content: 'Проектування і розробка КМД, машин і механізмів (машинобудування). Інженерні послуги.'
        },
      ])
    } else {
      this.title.setTitle('Steelwork Portfolio');
      this.meta.addTags ([  
        {
          name: 'keywords', content: 'Example KMD, Model of steel structures'
        },
        {
          name: 'description', content: 'Design and development of drawings of steel structures, machines and mechanisms (mechanical engineering). Engineering services. Outsource design steel structures.'
        },
      ])
    }
   }
}
