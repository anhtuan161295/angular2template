import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component'
@Component({
  selector: 'my-app',
  template: `
  <h1>Helle {{title}}!</h1>
  <input type="text" #textName (keyup)="0" />
  <p>Agree number: {{agree}}. Disagree: {{disagree}} </p>
  <button (click)="changeName()" >Change name</button>
  <my-tutorial *ngFor="let person of names" [name]="person" (onVote)="parentVote($event)" ></my-tutorial>
  `,

})
export class AppComponent {
  // interpolation
  public title = "TEDU Channel";
  public agree: number = 0;
  public disagree: number = 0;
  public names = ['Mr A', 'Mr B', 'Mr C', 'Mr D'];

  @ViewChild(TutorialComponent)
  private tutorialComponent: TutorialComponent;

  parentVote(agree: boolean) {
    if (agree) this.agree++;
    else this.disagree++;
  }
  changeName(){
    this.tutorialComponent.setName('Change name in Parent');
  }
}
