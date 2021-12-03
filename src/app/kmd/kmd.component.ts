import { Component, OnInit } from '@angular/core';
import { LangService } from '../services/lang.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kmd',
  templateUrl: './kmd.component.html',
  styleUrls: ['./kmd.component.css']
})
export class KmdComponent implements OnInit {
  
  _lang: string;

  constructor(private langService: LangService, private meta: Meta, private title: Title) {    

    meta.addTags ([
      {
        name: 'autor', content: 'vit.mk.ua'
      }
    ])
   }

  ngOnInit() {
    this._lang = this.langService._lang;
    this.langService.langClick.subscribe(ln => {this._lang = ln});

    if (this._lang == "RU") {
      this.title.setTitle('Заказать чертежи КМД, машин и механизмов(машиностроение)');
      this.meta.addTags ([  
        {
          name: 'keywords', content: 'металлоконструкции, кмд укр, кмд рус, ЕСКД, кмд, чертежи'
        },
        {
          name: 'description', content: 'Проектирование и разработка КМД, машин и механизмов(машиностроение). Инженерные услуги.'
        },
      ])
    } else if (this._lang == "UA") {
      this.title.setTitle('Замовити креслення КМД, машин і механізмів (машинобудування)');
      this.meta.addTags ([  
        {
          name: 'keywords', content: 'кмд укр, кмд рус, ЕСКД, кмд, металоконструкції, креслення'
        },
        {
          name: 'description', content: 'Проектування і розробка КМД, машин і механізмів (машинобудування). Інженерні послуги.'
        },
      ])
    } else {
      this.title.setTitle('Order the development of drawings of steel structures, machines and mechanisms (mechanical engineering)');
      this.meta.addTags ([  
        {
          name: 'keywords', content: 'steel structures, drawings, engeenering drawings, '
        },
        {
          name: 'description', content: 'Design and development of drawings of steel structures, machines and mechanisms (mechanical engineering). Engineering services. Outsource design steel structures.'
        },
      ])
    }
  }
}
