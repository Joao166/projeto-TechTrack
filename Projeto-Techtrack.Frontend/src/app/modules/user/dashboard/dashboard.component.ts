import { Component } from '@angular/core';
import { IOccupation } from 'src/app/components/occupation-section/interfaces/IOccupation';
import { UserService } from 'src/app/shared/services/user/user.service';
import {OccupationService} from 'src/app/shared/services//occupation/occupation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // criando a lista de lingugens que serão usadas na aplicação e serão passadas para o componente filho de language-section
  styles = [{
    css: 'bg-warning bg-opacity-50',

  }, {

    css: 'bg-success bg-opacity-25',
  }]

  occupationInfo!: IOccupation[];
  ngOnInit(): void {
    this.occupationService.get().subscribe({
      next: (_occupations) => {
       this.occupationInfo = _occupations;
       console.log(this.occupationInfo)
      },
      error: (err) =>{
        console.log(err);
      }
    })

  }
  constructor(private occupationService: OccupationService){

  }
}
