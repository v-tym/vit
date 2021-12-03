import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  a1 = true;
  a2 = true;
  a3 = true;
  a4 = true;
  a5 = true;
  a6 = true;
  ln: string;

  constructor(private sidebar: SidebarService, private ls: LangService) { }

  ngOnInit() {
    this.ln = this.ls._lang;
    this.ls.langClick.subscribe(m => this.ln = m);
  }

  Toggle() {
    this.sidebar._a1 = this.a1;
    this.sidebar._a2 = this.a2;
    this.sidebar._a3 = this.a3;
    this.sidebar._a4 = this.a4;
    this.sidebar._a5 = this.a5;
    this.sidebar._a6 = this.a6;
    this.sidebar.sidebar();    
  }

}
