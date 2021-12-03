import { Component, OnInit, Injectable } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SkilsService } from 'src/app/services/skils.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

@Injectable()
export class ResumeComponent implements OnInit {

  experience = [];
  ln: string;
  a1: boolean = true;
  a2: boolean = true;
  a3: boolean = true;
  a4: boolean = true;
  a5: boolean = true;
  a6: boolean = true;
  skilsEng = [];
  skilsProg = [];

  public yearB:number = new Date(1991, 8, 22).getFullYear();
  public dateNow:number = new Date().getFullYear();
  public myFullYear:number = this.dateNow - this.yearB;

  constructor(private ex: ExperienceService,
              private ls: LangService, 
              private sb: SidebarService,
              private sk: SkilsService) { 
  }

  ngOnInit( ) {    
    this.ex.getExperince().subscribe(_experience => {
      this.experience = _experience;
    });

    this.ln = this.ls._lang;

    this.ls.langClick.subscribe( m => this.ln = m);
    this.sb.change_a1.subscribe(x1 => this.a1 = x1);
    this.sb.change_a2.subscribe(x2 => this.a2 = x2);
    this.sb.change_a3.subscribe(x3 => this.a3 = x3);
    this.sb.change_a4.subscribe(x4 => this.a4 = x4);
    this.sb.change_a5.subscribe(x5 => this.a5 = x5);
    this.sb.change_a6.subscribe(x6 => this.a6 = x6);
    this.sk.getSkils().subscribe(s => {this.skilsEng = s});
    this.sk.getSkilsProg().subscribe(s => {this.skilsProg = s});
  }
}
