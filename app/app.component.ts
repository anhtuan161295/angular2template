import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Helle {{title}}!</h1>
  <!-- <img src="http://lorempixel.com/300/300" /> -->
  <img [src]="image" />
  <my-tutorial></my-tutorial>
  <input type="text" [value]="welcomeText" />
  `,

})
export class AppComponent {
  // interpolation
  public title = "TEDU Channel";
  // property binding
  public image = "http://lorempixel.com/300/300";
  public welcomeText = "Welcome to Angular 2 for Beginners";

}
