import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  _lang: string;

  constructor(private langService: LangService, private meta: Meta,private title: Title) {   

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
      this.title.setTitle('Контакты');
      this.meta.addTags ([  
        {
          name: 'description', content: 'Оставить запрос на разработку КМД. КМД рус. КМД укр. КМД стальных конструкицй. Оставить запрос на разработку машин и механизмов(ЕСКД)'
        },
      ])
    } else if (this._lang == "UA") {
      this.title.setTitle('Контакти');
      this.meta.addTags ([  
        {
          name: 'description', content: 'Залишити запит на розробку КМД. КМД рус. КМД укр. КМД сталевих конструкіцй. Залишити запит на розробку машин і механізмів (ЄСКД).'
        },
      ])
    } else {
      this.title.setTitle('Contacts');
      this.meta.addTags ([  ,
        {
          name: 'description', content: 'Leave a request for the development of drawings of steel structures. Leave a request for the development of machines and mechanisms.'
        },
      ])
    }
  }
  
color: string = "red"

}
