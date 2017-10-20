import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  sources: Array<Object>;

  constructor() { 
    this.sources = [
      {
          src: "http://static.videogular.com/assets/audios/videogular.mp3",
          type: "audio/mp3"
      }
    ];
  }

  ngOnInit() {
  }

}
