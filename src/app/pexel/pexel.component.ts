import { Component, Input } from '@angular/core';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-pexel',
  templateUrl: './pexel.component.html',
  styleUrls: ['./pexel.component.css']
})
export class PexelComponent {
  @Input()
  set city(input: string) {
    this.searchPhotos(input, 1);
  };


  search: string;
  perPage = 1;
  data: string[];

  constructor(private httpService: HttpService) {
    this.httpService.getData(this.search, this.perPage);
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
