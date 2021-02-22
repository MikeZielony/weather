import {Component, Input, OnInit} from '@angular/core';
import {WeatherWidgetComponent} from './weather-widget/weather-widget.component';

@Component({
  selector: 'app-pexel',
  templateUrl: './pexel.component.html',
  styleUrls: ['./pexel.component.css']
})
export class PexelComponent implements OnInit {


  @Input() city: string;
  constructor() { }

  ngOnInit(): void {
  }

}
