import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  curriculumForm:FormGroup = new FormGroup({
    nombre:new FormControl('', Validators.required),
    apellido:new FormControl('', Validators.required),
    dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]),
    genero: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    telefono: new FormControl(''),
    apodo: new FormControl('') 
  });

  constructor() { }

  ngOnInit() {
  }

  enviarCurriculum(){
    console.log(this.curriculumForm.value);
  }

  limpiarCampos(){
    this.curriculumForm.reset();
  }
}
