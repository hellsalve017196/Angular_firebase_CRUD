import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  private weather_url = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private httpClient: HttpClient) {
  }

  public getWeather() {
    return this.httpClient.get(`${this.weather_url}`);
  }

  public setWeather(obj) {
    return this.httpClient.post(`${this.weather_url}`, obj);
  }
}
