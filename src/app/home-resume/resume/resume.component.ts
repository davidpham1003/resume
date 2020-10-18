import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  isShow: boolean;
  isShowFirst:boolean;
  isShowContent: boolean;
  content: String = 'about';
  changeContent(value,value2) {
    console.log(this.isShowFirst)
    if(value2 == 1){
      this.isShowFirst = false
    }else{
      this.isShowFirst = true
    }
    this.content = value;
  }
  constructor() {}

  ngOnInit(): void {
    console.log(this.isShowFirst)
    setTimeout(() => {
      this.isShow = true;
    });
    setTimeout(() => {
      this.isShowContent = true;
    }, 500);
  }
}
