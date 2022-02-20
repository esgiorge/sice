import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
    'clave': ['', [Validators.required, Validators.minLength(8),Validators.maxLength(12)]],
    'confirmar': ['', [Validators.required, Validators.minLength(8),Validators.maxLength(12)]]
  })
  
  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  entrar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

  regresar(){
    this.router.navigate(['/auth/login']);
  }

}
