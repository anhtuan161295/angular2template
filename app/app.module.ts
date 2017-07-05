import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {TutorialComponent} from './tutorial.component';
import {FormsModule} from '@angular/forms';
import {ExponentialStrenthPipe} from './exponential-strength.pipe.js'
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,TutorialComponent, ExponentialStrenthPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
