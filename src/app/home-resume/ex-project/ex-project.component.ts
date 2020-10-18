import { Component, OnInit } from '@angular/core';
import { DataResumeService } from 'src/app/services/data-resume.service';

@Component({
  selector: 'app-ex-project',
  templateUrl: './ex-project.component.html',
  styleUrls: ['./ex-project.component.scss']
})
export class ExProjectComponent implements OnInit {
  project:any[]

  constructor(private data: DataResumeService) { }

  ngOnInit(): void {
    this.project = this.data.project 
    console.log(this.project)
  }

}
