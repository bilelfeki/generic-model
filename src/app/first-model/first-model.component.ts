import { Component, OnInit } from '@angular/core';
import { FirstModelService } from '../first-model.service';

@Component({
  selector: 'app-first-model',
  templateUrl: './first-model.component.html',
  styleUrl: './first-model.component.css'
})
export class FirstModelComponent implements OnInit {

  constructor(private model:FirstModelService){}
  elements !:any
  ngOnInit(): void {
    this.elements = this.model.getForm()
  }

  onChange($event: any) {
    console.log($event);
  }
}
