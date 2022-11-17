import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CounterComponent } from "./counter.component";
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonMinusComponent } from './button-minus/button-minus.component';



@NgModule({
declarations: [CounterComponent, ButtonAddComponent, ButtonMinusComponent],
imports: [CommonModule],
exports:[CounterComponent]
})



export class CounterModule {}
