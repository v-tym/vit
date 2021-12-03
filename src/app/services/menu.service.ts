import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class MenuService {
  
  private data: string[] = ["About_me", "Portfolio", "Contacts"]; 

  getData(): string[] {
    return this.data;
  }
  
  constructor(private http: HttpClient) { }
 
  getMenu(): Observable<any> {
    return this.http.get('assets/getMenu.JSON');
  } 

}
