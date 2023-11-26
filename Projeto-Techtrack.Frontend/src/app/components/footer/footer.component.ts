import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  checkIfUserIsLogged(): boolean {
    return localStorage.getItem('user_Info') !== null; // checkando se os valores no localstorage são nulos
  }
}
