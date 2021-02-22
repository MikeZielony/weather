import {Component, Input} from '@angular/core';
import {HttpService} from '../services/http.service';


@Component({
  selector: 'app-pexel',
  templateUrl: './pexel.component.html',
  styleUrls: ['./pexel.component.css']
})
export class PexelComponent {
  @Input() city: string;
  search: string;
  perPage = 1;
  data: string[];

  constructor(private httpService: HttpService) {
    this.httpService.getData(this.search, this.perPage);
  }


  searchPhotos() {
    this.httpService.getData(this.search, this.perPage).subscribe((data) => {
      console.log(data);
      this.data = data.photos;
    }, (error => {
      console.log(error);
    }));
  }
}
