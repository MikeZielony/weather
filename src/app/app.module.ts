import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PexelComponent } from './pexel/pexel.component';
import {WeatherWidgetComponent} from './weather-widget/weather-widget.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PexelComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
