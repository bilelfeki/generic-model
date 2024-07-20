import { Component, OnInit } from '@angular/core';
import { SecondModelService } from '../second-model.service';

@Component({
  selector: 'app-second-model',
  templateUrl: './second-model.component.html',
  styleUrl: './second-model.component.css',
})
export class SecondModelComponent implements OnInit {

  elements !:any
  constructor(private model: SecondModelService) {}
  ngOnInit(): void {
    this.elements = this.model.getForm()
  }

  onChange($event: any) {
    console.log($event);
  }
}
