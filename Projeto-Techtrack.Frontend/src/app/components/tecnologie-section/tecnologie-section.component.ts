import { Component, Input } from '@angular/core';
import { ITecnologie } from '../occupation-section/interfaces/ITecnologie';

@Component({
  selector: 'app-tecnologie-section',
  templateUrl: './tecnologie-section.component.html',
  styleUrls: ['./tecnologie-section.component.scss']
})
export class TecnologieSectionComponent {
  @Input('tecnologieInfo') tecnologieInfo! : ITecnologie[]
  ngOnInit(): void {
  }
  
}
