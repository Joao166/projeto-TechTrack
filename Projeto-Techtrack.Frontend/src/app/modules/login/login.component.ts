import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ILogin } from 'src/app/components/occupation-section/interfaces/ILogin';
import { IUser } from 'src/app/components/occupation-section/interfaces/IUser';
import { UserService } from 'src/app/shared/services/user/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private router: Router;
  loginForm: FormGroup; // o FormGroup representa um formulário e com isso é possivel fazer algumas funcionalidades a mais, no caso aqui é o um formulário contendo as propriedades de email e senha 
  private userService: UserService
  submitted = false;
  ngOnInit(): void {
    localStorage.clear() // limpar localstorage


  }

  Login(username: string, password: string) {
    this.userService.Get().subscribe({
      next: (success) => {
        var user = success.filter(user => user.username === username && user.password === password)
        if (user.length !== 0) {
          localStorage.setItem('user_Info', JSON.stringify(user[0]));
          this.router.navigateByUrl('user/dashboard') //redirecionando para a url /authenticate
        } else {
          Swal.fire({
            // alert mais bonito
            title: 'Não encontrado',
            text: 'Usuário não existe',
            icon: 'error',
            confirmButtonColor: '#6610f2',
            confirmButtonText: 'Fechar',
            color: '#6610f2',
            background: '#212529',

          })
        }
      },
      error: (err) => {
        console.log(err)
      }
    });

  }

  constructor(_router: Router, private fb: FormBuilder, _userService: UserService) {
    this.router = _router; // importando o router pois ele é responsável por fazer algumas operações na rota "url" da aplicação
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // criando um formgroup que será responsável por representar o input de email e senha e aplicando uma validação de required neles

    this.userService = _userService;
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    if (!this.loginForm.valid) return;



    this.Login(this.f['username'].value, this.f['password'].value)

    /*
    this.userService.Login(this.f['username'].value, this.f['password'].value).subscribe({
      next: (data: any) => {
        localStorage.setItem('user_Info', JSON.stringify(data));
        this.router.navigateByUrl('user/dashboard') //redirecionando para a url /authenticate
      },
      error: (error: any) => {
        Swal.fire({
          // alert mais bonito
          title: 'Não encontrado',
          text: 'Usuário não existe',
          icon: 'error',
          confirmButtonColor: 'black',
          confirmButtonText: 'Fechar'
        })
      }
    })



  */



  }


  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.loginForm.get(inputName);
    if (formControl.errors !== null) {
      return formControl.errors[validatorName] && formControl.touched;
    }
  }

}

