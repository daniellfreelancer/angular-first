import { Component, EventEmitter, Input, Output } from '@angular/core';


// Crear componentes de forma automatica abreviado
// ng g c folder/name
@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {

  @Input()
  contador: number = 0;

  @Output() onAdd: EventEmitter<number> = new EventEmitter();

  add(){
    this.contador++
   this.onAdd.emit(this.contador)
  }


}
