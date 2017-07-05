import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2> {{title}} </h2>
    <p>Child component: {{name}}</p>

    <button [disabled]="voted" (click)="vote(true)" >Agree</button>
    <button [disabled]="voted" (click)="vote(false)" >Disagree</button>
    Result: {{voted}}
    `

})
export class TutorialComponent {
    public title = "This TEDU Angular2 Tutorial component";
    @Input() name: string;
    @Output() onVote = new EventEmitter<boolean>();

    public voted: boolean = false;

    setName(name: string) {
        this.name = name;
    }

    vote(agree: boolean) {
        this.voted = false;
        this.onVote.emit(agree);
    }
}
