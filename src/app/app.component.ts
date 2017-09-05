import { Component, Inject } from '@angular/core';
import { Car } from './car.service';
import { Body } from './body.service';
import { Engine } from './engine.service';
import { Tires } from './tires.service';

@Component({
  selector: 'my-app',
  template: `<h1>Color {{color}}</h1>`,
  providers: [Car, Body, Engine, Tires]
})
export class AppComponent  { 
	color: string;
  constructor(@Inject(Car) c: Car){
		this.color = c.body.color
	}
	name = 'Angular'; 
}
