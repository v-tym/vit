import { Component, OnInit, Injectable } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: []
})

@Injectable()
export class MenuComponent implements OnInit {

  menu = [
    {
      "id": "1",
      "Value_UA": "Про_мене",
      "Value_RU": "Обо_мне",
      "Value_US": "About_me"
  },
  {
      "id": "3",
      "Value_UA": "Портфоліо",
      "Value_RU": "Портфолио",
      "Value_US": "Portfolio"
  },
  {
      "id": "4",
      "Value_UA": "КМД",
      "Value_RU": "КМД",
      "Value_US": "Steel_Detailing"
  },
  {
      "id": "5",
      "Value_UA": "Контакти",
      "Value_RU": "Контакты",
      "Value_US": "Contact"
  }
  ];
  _lang: string;

  constructor(private langService: LangService) {   
   }  

  ngOnInit() {     
   this.langService.langClick.subscribe(ln => {this._lang = ln}); 
   this._lang = this.langService.getLg();     
  }
}
