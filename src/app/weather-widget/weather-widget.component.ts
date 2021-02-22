import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommunicationServiceService } from '../communication-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit, OnDestroy {

  WeatherData: any;
  api = '922874ef47ae7c29f21b90b9ece53133';
  city = '';
  icon;
  urlI;

  public communicationServiceSubscription: Subscription;

  constructor(private _communicationService: CommunicationServiceService) {
  }

  ngOnInit() {
    this.WeatherData = {
      weather: [],
      main: {},
      isDay: true
    };
    console.log(this.WeatherData);

   this.communicationServiceSubscription = this._communicationService.selectedCity$
     .subscribe(city => {
       this.city = city;
       this._getWeatherData();
     });

  }

  ngOnDestroy(): void {
    if(this.communicationServiceSubscription){
      this.communicationServiceSubscription.unsubscribe();
    }
  }

  public castNewCityValue(): void {
    this._communicationService.selectedCity$.next(this.city);
  }

  private _getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api}`)
      .then(response => response.json())
      .then(data => {
          this.setWeatherData(data);
        }
      );
  }

  setWeatherData(data) {
    console.log(data.weather);
    this.WeatherData = data;
    const sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    const currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
