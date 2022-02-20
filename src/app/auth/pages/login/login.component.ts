import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'usuario': new FormControl(),
  //   'clave': new FormControl()
  // });
  miFormularioLogin: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
    'clave': ['', [Validators.required, Validators.minLength(8),Validators.maxLength(12)]]
  })
  
  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  campoEsValido(campo:string){
    return this.miFormularioLogin.controls[campo].errors && this.miFormularioLogin.controls[campo].touched;
  }

  entrar(){
    if(this.miFormularioLogin.invalid){
      this.miFormularioLogin.markAllAsTouched();
      return;
    }
    console.log(this.miFormularioLogin.value);
    this.router.navigate(['/admin']);
  }

  registrarse(){
    this.router.navigate(['/auth/registro']);
  }
}
