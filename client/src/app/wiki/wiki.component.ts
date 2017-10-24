import { Component, OnInit } from '@angular/core';

import { DataService } from '../data';
import { WikiModel } from '../models';

@Component({
  selector: 'wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  private wikiData: WikiModel;

  constructor(dataService: DataService) { 
    dataService.getWiki().subscribe(
      data => this.wikiData = data
    );
  }

  ngOnInit() {
  }

}
