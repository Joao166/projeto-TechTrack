import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule, //responsável pelas rotas do login ( no caso a aplicação carregará o app-routing.module.ts e lá tem a assinatura para carregar esse arquivo login.module.ts e com isso a aplicação vai procurar o arquivos de rotas desse modulo achando esse)
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class LoginModule { }
