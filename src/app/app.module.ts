import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { GameControlOddComponent } from './game-control-odd/game-control-odd.component';
import { GameControlEvenComponent } from './game-control-even/game-control-even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    GameControlOddComponent,
    GameControlEvenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
