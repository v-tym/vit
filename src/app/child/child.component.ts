import { Component, OnInit } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title = 'VT';
  _ln:string;

  constructor(private ln:LangService) { }

  ngOnInit() {
    this._ln = this.ln._lang;
    this.ln.langClick.subscribe(ln => {this._ln = ln} );
  }

}
