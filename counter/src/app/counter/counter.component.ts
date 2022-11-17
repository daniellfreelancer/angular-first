import { Component } from "@angular/core";

@Component({
  selector:"app-contador",
  templateUrl: "./counter.component.html"
})

export class CounterComponent{
  contador: number = 0;

  handleAdd(value : number){
    this.contador = value++;
  }

  handleRest(value : number){
    this.contador = value--;
  }
}
