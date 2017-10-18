import { Injectable } from '@angular/core';

import { LinkModel } from '../models';

@Injectable()
export class DataService {

  constructor() { }

  public getLinks(): LinkModel[] {
    return [
      {
        name: 'Vk-link',
        link: 'www.youarejerk.com',
        owner: 'You Mom',
        description: 'Mockmockmock' 
      },
       {
        name: 'Vk-link',
        link: 'www.youarejerk.com',
        owner: 'You Mom',
        description: 'Mockmockmock' 
      },
      {
        name: 'Vk-link',
        link: 'www.youarejerk.com',
        owner: 'You Mom',
        description: 'Mockmockmock' 
      }
    ];
  }

  public getPhotos(): any {

  }

  public getAudios(): any {

  }

  public getWiki(): any {

  }
}
