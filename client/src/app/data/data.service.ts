import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LinkModel, WikiModel } from '../models';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public getLinks(): Observable<LinkModel[]> {
    return this.http
      .get<LinkModel[]>('/contacts');
  }

  public getPhotos(): any {

  }

  public getAudios(): any {

  }

  public getWiki(): Observable<WikiModel> {
    return this.http
      .get<WikiModel>('/wiki');
  }
}
