import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs'
import { IOccupation } from 'src/app/components/occupation-section/interfaces/IOccupation';
import { ITecnologie } from 'src/app/components/occupation-section/interfaces/ITecnologie';
import { OccupationService } from 'src/app/shared/services/occupation/occupation.service';
import { TecnologieService } from 'src/app/shared/services/tecnologie/tecnologie.service';

@Component({
  selector: 'app-learn-about',
  templateUrl: './learn-about.component.html',
  styleUrls: ['./learn-about.component.scss']
})
export class LearnAboutComponent {
  public occupationInfo!: IOccupation;
  public tecnologies!: ITecnologie[]
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.occupationService.getById(id).pipe(first()).subscribe({
      next: (occupation) => {
        console.log(occupation)
        this.occupationInfo = occupation;
        this.tecnologies = occupation.tecnologies;
      },
      error: (err) => {
        if (err.status >= 400) {
          console.log(err);
        }
      }
    });



  }
  constructor(private occupationService: OccupationService, private route: ActivatedRoute, private tecnologiesService: TecnologieService) {

  }
  
  /*
  loadTecnologies(id: any) {
    this.tecnologiesService.GetTecnologiesWithOccupationId(id).pipe(first()).subscribe({
      next: (_tecnologies) => {
        this.tecnologies = _tecnologies; 
        console.log(this.tecnologies)
      },
      error: (err) => {
        if (err.status >= 400) {
          console.log(err);
        }
      }
    })
  }
  */
}
