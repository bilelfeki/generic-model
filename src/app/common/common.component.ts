import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrl: './common.component.css',
})
export class CommonComponent {
  elements_={
    name: { value: 'bilel', hidable: true },
    age: { value: '20', hidable: true },
    submit:{hidable:true}
  };
  @Output() changedValue=new EventEmitter()
  @Input() set elements(elements:any){
    this.elements_={...this.elements_,...elements}
  }
  onSubmit() {
    this.changedValue.emit(this.elements)
  }
}
