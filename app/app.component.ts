import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Helle {{title}}!</h1>
  <my-tutorial></my-tutorial>
  `,

})
export class AppComponent {
  // interpolation
  public title = "TEDU Channel";

}
