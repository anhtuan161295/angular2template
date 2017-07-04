import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2> {{title}} </h2>
    <p [ngClass]="{classOne:cone, classTwo:ctwo}" >This ngClass apply style</p>
    <button (click)="toggle()">Toggle</button>
    <p [ngStyle]="{'font-style':style, 'font-size':size}" >This paragraph will be apply to ngStyle</p>
    `,
    styles: [
        `
        .classOne{
            color:white;
        }
        .classTwo{
            background-color:black;
        }
        `
    ]
})
export class TutorialComponent {
    public title = "This TEDU Angular2 Tutorial component";
    public cone = true;
    public ctwo = true;
    public style = "italic";
    public size = "30px";
    toggle() {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}
