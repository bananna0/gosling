import { Component, OnInit } from '@angular/core';

import { LinkModel } from '../models';
import { DataService } from '../data';

@Component({
  selector: 'links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  private links: LinkModel[];

  constructor(dataService: DataService) { 
    dataService.getLinks().subscribe(
      data => this.links = data
    );
  }

  ngOnInit() {
  }

}
