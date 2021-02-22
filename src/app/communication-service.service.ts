import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  public selectedCity$: BehaviorSubject<string> = new BehaviorSubject<string>('krakow');

  constructor() { }
}
