import { Component } from '@angular/core';
import { BoredApiService } from '../services/bored.service';
import { Activity } from './activity.interface';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="activity">
      <h2>{{ activity.activity }}</h2>
      <p>Type: {{ activity.type }}</p>
      <p>Participants: {{ activity.participants }}</p>
      <p>Price: {{ activity.price }}</p>
    </div>
    <button (click)="getRandomActivity()">Get Random Activity</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  activity: Activity = {} as Activity; // Inicializa como um objeto vazio

  constructor(private boredApiService: BoredApiService) {}

  getRandomActivity() {
    this.boredApiService.getActivity().subscribe(activity => {
      this.activity = activity;
    });
  }
}
