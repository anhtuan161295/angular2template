"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // interpolation
        this.title = "Hello TEDU Channel";
        this.today = Date.now();
        this.percentNumber = 1.3495;
        this.e = 2.718281828459045;
        this.object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
        this.collection = ['a', 'b', 'c', 'd'];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1> {{title | lowercase }}!</h1>\n  <p>Date today: {{today | date:'shortDate' }} </p>\n  <p>Percent: {{percentNumber | percent }}</p>\n  <p>e (3.1-5): {{e | number:'3.1-5' }}  </p>\n  <pre>{{object | json }}</pre>\n  <p>2 power 10: {{2 | exponentialStrength: 10 }}</p>\n  <ul>\n    <li *ngFor=\"let i of collection | slice:1:3 \" >{{i}}</li>\n  </ul>\n  <my-tutorial  ></my-tutorial>\n  ",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map