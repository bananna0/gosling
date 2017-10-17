import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from 'angular2-mdl';
import { RouterModule } from '@angular/router'

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { GameComponent } from './game/index';
import { MusicComponent } from './music/index';
import { PhotoComponent } from './photo/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    MusicComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
