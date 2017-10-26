import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LinkModel, WikiModel } from '../models';

@Injectable()
export class DataService {

  private SERVER_URL = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  public getLinks(): Observable<LinkModel[]> {
    return this.http
      .get<LinkModel[]>(`${this.SERVER_URL}/contacts`);
  }

  public getPhotos(): any {

  }

  public getAudios(): any {

  }

  public getWiki(): Observable<WikiModel> {
    return this.http
      .get<WikiModel>(`${this.SERVER_URL}/wiki`);
  }
}
