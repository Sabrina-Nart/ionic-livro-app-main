import { Component } from '@angular/core';
import { BoredService } from './bored.service';
import { Activity } from './home/Activity/Activity';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  Activity: Activity;

  constructor(private boredService: BoredService) {}

  onTypeSelected(type: string) {
    this.boredService.getActivity(type)
      .subscribe((data: Activity) => {
        this.Activity = data;
      }, error => {
        console.error('Error fetching Activity:', error);
      });
  }
}
