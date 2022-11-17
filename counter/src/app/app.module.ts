import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonAddComponent } from './counter/button-add/button-add.component';
import { ButtonMinusComponent } from './counter/button-minus/button-minus.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonAddComponent,
    ButtonMinusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
