import { Component, OnInit } from '@angular/core';
import { BoredService } from 'src/app/bored.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activity: any;

  constructor(private boredService: BoredService) { }

  ngOnInit() {
    this.loadActivity();
  }

  loadActivity() {
    this.boredService.getActivity()
      .then(response => {
        this.activity = response.data;
      })
      .catch(error => {
        console.error('Error fetching activity:', error);
      });
  }
}
