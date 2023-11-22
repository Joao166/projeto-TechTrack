import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearnAboutComponent } from './learn-about/learn-about.component';
import { HttpClientModule } from '@angular/common/http';
import { OccupationSectionComponent } from 'src/app/components/occupation-section/occupation-section.component';
import { TecnologieSectionComponent } from 'src/app/components/tecnologie-section/tecnologie-section.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LearnAboutComponent,
    OccupationSectionComponent,
    TecnologieSectionComponent,
    CreateComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule, //responsável pelas rotas do user ( no caso a aplicação carregará o app-routing.module.ts e lá tem a assinatura para carregar esse arquivo user.module.ts e com isso a aplicação vai procurar o arquivos de rotas desse modulo achando esse)
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // responsável pelas chamadas http

  ]
})
export class UserModule { }
