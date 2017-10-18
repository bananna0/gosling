import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from 'angular2-mdl';
import { RouterModule } from '@angular/router';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { GameComponent } from './game/index';
import { MusicComponent } from './music/index';
import { PhotoComponent } from './photo/index';
import { WikiComponent } from './wiki/index';
import { LinksComponent } from './links/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    MusicComponent,
    PhotoComponent,
    WikiComponent,
    LinksComponent  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
