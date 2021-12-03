import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEventType, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FromService {

  constructor(private http: HttpClient) { }

  public percentDone: any;

  postMail(form){
    
    const req = new HttpRequest('POST', 'mail.php', form, {
      reportProgress: true,
    });
    
     this.http.request(req).subscribe(event => {
      // Via this API, you get access to the raw event stream.
      // Look for upload progress events.
      if (event.type === HttpEventType.UploadProgress) {
        // This is an upload progress event. Compute and show the % done:
       this.percentDone = Math.round(100 * event.loaded / event.total);      
      } else if (event instanceof HttpResponse) {
       console.log('File is completely uploaded!');
      }     
    });  
   
  }
}
