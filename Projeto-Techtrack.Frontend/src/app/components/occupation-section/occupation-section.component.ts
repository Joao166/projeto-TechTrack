import { Component, Input } from '@angular/core';
import { IOccupation } from './interfaces/IOccupation';

@Component({
  selector: 'app-occupation-section',
  templateUrl: './occupation-section.component.html',
  styleUrls: ['./occupation-section.component.scss']
})
export class OccupationSectionComponent {
  @Input('occupationInfo') occupationInfo!: IOccupation;
  ngOnInit() {
    console.log(this.occupationInfo);
  }
}
