import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-app-obout-me',
  templateUrl: './app-obout-me.component.html'  
})
export class AppOboutMeComponent implements OnInit {
  
  _lang: string;

  constructor(private langService: LangService, private meta: Meta,private title: Title) {     
    
  }

  ngOnInit() {
    this._lang = this.langService._lang;
    this.langService.langClick.subscribe(ln => {this._lang = ln});
    
    if (this._lang == "RU") {
      this.title.setTitle('Виталий Тимошенко - инженерные услуги.');
      this.meta.addTags ([  
        {
          name: 'keywords', content: 'Инженерные услуги'
        },
        {
          name: 'description', content: 'Разработка чертежей КМД и проектирование металлоконструкций. Разработка чертежей машин и механизмов(машиностроение). Раскрой листового проката и другие инженерные услуги.'
        },
      ])
    } else if (this._lang == "UA") {
      this.title.setTitle('Віталій Тимошенко - інженерні послуги.');
      this.meta.addTags ([  
        {
          name: 'keywords', content: 'Інженерні послуги'
        },
        {
          name: 'description', content: 'Розробка креслень КМД і проектування металоконструкцій. Розробка креслень машин і механізмів (машинобудування). Розкрій листового прокату і інші інженерні послуги.'
        },
      ])
    } else {
      this.title.setTitle('Vitaliy Tymoshenko - remote engineering services. ');
      this.meta.addTags ([  
        {
          name: 'keywords', content: 'Engineering services'
        },
        {
          name: 'description', content: 'Development and design of metal structures. Development of drawings of machines and mechanisms (mechanical engineering). Sheet metal cutting and other engineering services'
        },
      ])
    }
  }

}
