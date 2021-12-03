import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkilsService {

  constructor(private http: HttpClient) {}

   _engine: any =[];

   getSkils():Observable<any> {
     return this.http.get('assets/getSkils.JSON');
   }

   getSkilsProg():Observable<any> {
    return this.http.get('assets/getSkilsProg.JSON');
  }
}
