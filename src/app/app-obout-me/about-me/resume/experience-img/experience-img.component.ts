import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-img',
  templateUrl: './experience-img.component.html',
  styleUrls: ['./experience-img.component.css']
})
export class ExperienceImgComponent implements OnInit {  

  clicks:number = 1;
  maxQttImg: number = 8;
  timeout:number = 10000;
  path1:string = "/../../img/";
  path2:string = "/";
  path3:string = ".png"
  _id:string;
  imgWay:string;

  @Input() id:string;  

  constructor() { 
  }

  ngOnInit() {
    this.imgWay = "/../../img/"+this.id+"/"+this.clicks+".JPG";
  } 
  
  nextImg():number { 
    if (this.clicks<=this.maxQttImg-1) {
     this.clicks++;
    }
    else{ 
      return this.clicks = 1;      
    }
  };

  prevImg():number { 
    if (this.clicks >=2) {
     this.clicks--;
    }
    else{ 
      return this.clicks = this.maxQttImg;      
    }
  };

  labelImg(x) {
    this.clicks = x;
  }
}
