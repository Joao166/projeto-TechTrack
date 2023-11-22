import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../occupation-section/interfaces/IUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user_Info: any;
  defaultImg = "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
  private router: Router;
  ngOnInit(): void {
    this.checkIfUserIsLogged();

    if (!this.checkIfUserIsLogged()) {
      this.router.navigateByUrl('/'); //  verificando se há algo no localstorage, se não tiver vai ser redirecionado pro login
      localStorage.clear();
    }
    var userJson : any = localStorage.getItem('user_Info');
    this.user_Info = JSON.parse(userJson);


  }
  constructor(_router: Router) {
    this.router = _router;
  }
  checkIfUserIsLogged(): boolean {
    return localStorage.getItem('user_Info') !== null; // checkando se os valores no localstorage são nulos
  }
  onLogout() {
    localStorage.removeItem('user_Info')
    this.router.navigateByUrl('/')
  }
}
