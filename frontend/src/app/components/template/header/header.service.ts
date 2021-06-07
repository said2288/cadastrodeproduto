import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  /** BehaviorSubject emitirá um novo evento toda vez que os dados mudarem,
   *  por isso passei pra ele HeaderData que é o model */
  private _headerData = new BehaviorSubject<HeaderData>({
    title: '',
    icon: '',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
