import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { CommunicationServiceService } from '../communication-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pexel',
  templateUrl: './pexel.component.html',
  styleUrls: ['./pexel.component.css']
})
export class PexelComponent implements OnInit, OnDestroy {

  search: string;
  perPage = 1;
  data: string[];

  public communicationServiceSubscription: Subscription;

  constructor(private httpService: HttpService,
              private _communicationService: CommunicationServiceService) {
  }

  public ngOnInit(): void {
    this.communicationServiceSubscription = this._communicationService.selectedCity$
      .subscribe(city => this.searchPhotos(city, 1))
  }

  public ngOnDestroy(): void {
    if(this.communicationServiceSubscription) {
      this.communicationServiceSubscription.unsubscribe();
    }
  }

  searchPhotos(search: string, perPage: number) {
    this.httpService.getData(search, perPage).subscribe((data) => {
      console.log(data);
      this.data = data.photos;
    }, (error => {
      console.log(error);
    }));
  }
}
