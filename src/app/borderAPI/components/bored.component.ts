import { Component } from '@angular/core';
import { BoredApiService } from '../services/bored.service';
import { Activity } from './activity.interface';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.scss']
})
export class BoredComponent {
  public activity: Activity | undefined;
  public selectedType: string | undefined;

  constructor(private boredApiService: BoredApiService) {}

  getRandomActivity() {
    this.boredApiService.getActivity().subscribe((activity: Activity) => {
      console.log('Atividade recebida:', activity);
      this.activity = activity;
    });
  }

  getActivityByType() {
    if (!this.selectedType) {
      console.error('Selecione um Tipo.');
      return;
    }

    this.boredApiService.getActivityByType(this.selectedType).subscribe((activity: Activity) => {
      this.activity = activity;
    });
  }
}
