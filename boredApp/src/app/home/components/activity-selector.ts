import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-activity-selector',
  templateUrl: './activity-selector.component.html',
  styleUrls: ['./activity-selector.component.scss']
})
export class ActivitySelectorComponent {
  @Output() typeSelected = new EventEmitter<string>();

  constructor() { }

  selectType(type: string) {
    this.typeSelected.emit(type);
  }
}
