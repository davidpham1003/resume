import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-resume',
  templateUrl: './home-resume.component.html',
  styleUrls: ['./home-resume.component.scss'],
})
export class HomeResumeComponent implements OnInit {
  isShowButton: boolean;

  isBackground: boolean;
  isHide:boolean;
  constructor(private router:Router) {}
  animaRouter(){
    this.isHide = true;
    setTimeout(() => {
      this.router.navigateByUrl('resume')
    }, 1000);
  }
  showBg() {
    this.isBackground = true;
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.isShowButton = true;
    }, 2800);
  }
}
