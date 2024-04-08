import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../components/activity.interface';

@Injectable({
  providedIn: 'root'
})

export class BoredApiService {
  private apiUrl = 'https://www.boredapi.com/api/activity';
  private apiUrlWithType = 'https://www.boredapi.com/api/activity?type=';

  constructor(private http: HttpClient) { }

  getActivity(): Observable<Activity> {
    return this.http.get<Activity>(this.apiUrl);
  }

  getActivityByType(type: string): Observable<Activity> {
    const url = `${this.apiUrlWithType}${type}`;
    return this.http.get<Activity>(url);
  }
}
