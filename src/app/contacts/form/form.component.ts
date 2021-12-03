import { Component, OnInit } from '@angular/core';
import { FromService } from 'src/app/services/from.service';
import { LangService } from 'src/app/services/lang.service';
import { mailForm } from './mailForm';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  _name: string[] = ["Your name*", "Ваше имя*",  "Ваше ім'я"];
  _tel: string[] = ["Telephone*(+380630000000)", "Телефон*(+380630000000)"];
  _message: string[] = ["Message", "Сообщение",  "Повідомлення"];
  bt:string[] = ['Send','Отправить', 'Відправити']

  mailForm: mailForm = new mailForm;
  files: any;  
  form: mailForm;
  formData = new FormData();
  backResult: mailForm;
  done: boolean = false;
  _ln:string;
  visibility: boolean = true;

  percentDone:number = 0;
  percentDone2:number = 5;

  status1:string = "Ваше письмо готовиться к отправке... Ожидайте.";
  status2:string = "Ваш лист в готується до відправлення... Зачекайте.";
  status3:string = "Your letter is getting ready to be sent... Please wait.";
  error:boolean = false;

  x = 'to top, black' + this.percentDone + '%, transparent';
  loaded: any;
  total: any;

  constructor(private fS:FromService, private ln:LangService, private http: HttpClient) {
    
  }

  onFileChange(event) {
    let _target = event.target || event.srcElement;
    this.files = _target.files;
  }

   onSubmit(form: any){

    this.form = form;

    if (this.files) { 
   
      let _files: FileList = this.files; 
      for(let i = 0; i < _files.length; i++){
       this.formData.append('file', _files[i], _files[i].name);
     }
  this.formData.set('name', this.form.name);
  this.formData.set('email', this.form.email);
  this.formData.set('phone', this.form.phone);
  this.formData.set('message', this.form.message);
  }

  else {
  this.formData.set('name', this.form.name);
  this.formData.set('email', this.form.email);
  this.formData.set('phone', this.form.phone);
  this.formData.set('message', this.form.message);
  }
    
     this.postMail(this.formData);

     this.visibility = false;

  }
  
  ngOnInit() {
    this._ln = this.ln._lang;
    this.ln.langClick.subscribe(ln => {this._ln = ln} );
  }

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
       this.percentDone2 = Math.round(100 * event.loaded / event.total)+5; 
      } 
       if (event instanceof HttpResponse) {
       this.error = true;
       this.status1 = "Ваше письмо отправленно!";
       this.status2 = "Ваш лист відправлений!";
       this.status3 = "Your letter has been sent!";
      }  
    /*  if (event instanceof HttpErrorResponse) {
        if (event.error === "404") {
          this.error = true;
          this.status1 = "Ошибка. Ваше письмо не отправленно!";
          this.status2 = "Помилка. Ваш лист не відправлено!";
          this.status3 = "Error. Your letter hasn't been sent!";
        }        
       }  */ 
    });  
  }  
 
}
