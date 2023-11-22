import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  private router: Router;
  userForm: FormGroup; // o FormGroup representa um formulário e com isso é possivel fazer algumas funcionalidades a mais, no caso aqui é o um formulário contendo as propriedades de email e senha 
  private userService: UserService
  submitted = false;
  ngOnInit(): void {
    localStorage.clear() // limpar localstorage
  }

  constructor(_router: Router, private fb: FormBuilder, _userService: UserService) {
    this.router = _router; // importando o router pois ele é responsável por fazer algumas operações na rota "url" da aplicação
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['',[Validators.required]]
    });
    // criando um formgroup que será responsável por representar o input de email e senha e aplicando uma validação de required neles

    this.userService = _userService;
  }
  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.userForm.invalid)return;
  
    this.userService.Create(this.userForm.value).subscribe({
      next: (data: any) => {
        localStorage.setItem('user_Info', JSON.stringify(data));
        this.router.navigateByUrl('user/dashboard') //redirecionando para a url /user/dashboard
      },
      error: (error:any) =>{
        console.log(error);
      }
    })
  }

  goLogin(){
    this.router.navigateByUrl('/');
  }
}
