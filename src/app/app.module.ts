import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppOboutMeComponent } from './app-obout-me/app-obout-me.component';
import { ChildComponent } from './child/child.component';
import { ContactsComponent } from './contacts/contacts.component';
import { KmdComponent } from './kmd/kmd.component';
import { LangComponent } from './lang/lang.component';
import { MenuComponent } from './menu/menu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SidebarComponent } from './app-obout-me/sidebar/sidebar.component';
import { AboutMeComponent } from './app-obout-me/about-me/about-me.component';
import { ResumeComponent } from './app-obout-me/about-me/resume/resume.component';
import { ExperienceImgComponent } from './app-obout-me/about-me/resume/experience-img/experience-img.component';
import { MainComponent } from './child/main/main.component';
import { FormComponent } from './contacts/form/form.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceService } from './services/experience.service';
import { LangService } from './services/lang.service';
import { MenuService } from './services/menu.service';
import { SidebarService } from './services/sidebar.service';
import {Routes, RouterModule, Route} from '@angular/router';
import { FromService } from './services/from.service';


@NgModule({
  declarations: [
    AppComponent,
    AppOboutMeComponent,
    ChildComponent,
    ContactsComponent,
    KmdComponent,
    LangComponent,
    MenuComponent,
    PortfolioComponent,
    SidebarComponent,
    AboutMeComponent,
    ResumeComponent,
    ExperienceImgComponent,
    MainComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ExperienceService, LangService, MenuService, SidebarService, FromService],
  bootstrap: [AppComponent]
})
export class AppModule { }
