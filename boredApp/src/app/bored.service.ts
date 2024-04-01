import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BoredService {
  private apiUrl = 'https://www.boredapi.com/api/activity';

  constructor() { }

  getActivity() {
    return axios.get(this.apiUrl);
  }
}
