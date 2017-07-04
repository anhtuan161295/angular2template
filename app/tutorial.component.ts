import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2> {{title}} </h2>
    <button (click)="OnClick()" >Click me</button> <br/>
    <button (click)="OnClick1(name.value)" >Click to display input</button> 
    <input type="text" #name /> <br/>
    <button (click)="OnClick1($event)" >Click event</button>
    `
})
export class TutorialComponent {
    public title = "This TEDU Angular2 Tutorial component";
    // #name là 1 biến tham chiếu, ở đây nó tham chiếu đến element input và lấy value ra
    OnClick() {
        console.log("Click me");
    }

    OnClick1(value) {
        console.log(value);
    }

}
