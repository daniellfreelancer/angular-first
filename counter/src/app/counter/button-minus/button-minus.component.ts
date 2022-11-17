import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-minus',
  templateUrl: './button-minus.component.html',
  styleUrls: ['./button-minus.component.css']
})
export class ButtonMinusComponent {


  @Input()
  contador: number = 0;

  @Output() onMinus: EventEmitter<number> = new EventEmitter();

  minus(){
    if (this.contador > 0){
      this.contador--
      this.onMinus.emit(this.contador)
    }

  }

}
