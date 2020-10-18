import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnChanges {
  @Input() isShowFirst;
  isShow: boolean = true;
  constructor() {}
  ngOnChanges() {
    if(this.isShowFirst == false){
      this.isShow = false
    }else{
      this.isShow = true
    }
  }
  ngOnInit(): void {
    
  }
}
