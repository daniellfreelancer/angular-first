import { CounterComponent } from './counter.component';
import { TestBed } from '@angular/core/testing';
import { ButtonAddComponent } from './button-add/button-add.component';
describe("CounterComponent",()=>{

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAddComponent]
    }).compileComponents();
  })

  // verificar que un componente se esté instanciando
  //pruebas unitarias a un componente

  it("Se debe crear el componente Counter",()=>{
    const fixture = TestBed.createComponent(CounterComponent)

    expect(fixture.componentInstance).toBeTruthy();


  })

  it("Se debe crear el texto Counter: 23",()=>{
    const fixture = TestBed.createComponent(CounterComponent)

    fixture.detectChanges()

    const compiled : HTMLElement = fixture.nativeElement

    console.log(compiled)
    expect(compiled.querySelector("h1")?.textContent).toEqual("Counter APP");

  })


  it("valor inicial del contador es 23", ()=>{
    const counter = new CounterComponent()

    expect(counter.contador).toEqual(23)

  })




})
