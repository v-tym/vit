import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './child/main/main.component';
import { AppOboutMeComponent } from './app-obout-me/app-obout-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { KmdComponent } from './kmd/kmd.component';


const routes: Routes = [
  { path: ':language', component: MainComponent },  
  { path: ':language/About_me',  component: AppOboutMeComponent},
  { path: ':language/Portfolio', component: PortfolioComponent},
  { path: ':language/Contact', component: ContactsComponent},
  { path: ':language/Steel_Detailing', component: KmdComponent},
  { path: '**',  redirectTo: '/UA' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
