import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearnAboutComponent } from './learn-about/learn-about.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent }, //responsável pelas rotas do user carregando a url /user/dashboard
    { path: 'learn/:id', component: LearnAboutComponent }, //responsável pelas rotas do user carregando a url /user/learn
    { path: 'create', component: CreateComponent }, 

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
