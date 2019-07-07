import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  generos: Array<any> = [
    { id: 1, descripcion: "Masculino" },
    { id: 2, descripcion: "Femenino" },
    { id: 3, descripcion: "Otro" }
  ]

  estados: Array<any> = [
    { id: 1, descripcion: "En Curso" },
    { id: 2, descripcion: "Terminado" }
  ]

  curriculumForm: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]),
    genero: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, this.validarDominioMail]),
    telefono: new FormControl('', Validators.pattern("[0-9]{7,10}")),
    apodo: new FormControl('', [], [this.validarApodo]),
    educacion: new FormArray([]),
    experiencia: new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  enviarCurriculum() {
    console.log(this.curriculumForm);
  }

  limpiarCampos() {
    this.curriculumForm.reset({
      nombre: '', apellido: '', dni: '', genero: '', email: '', telefono: '', apodo: '', educacion: [], experiencia: []
    });
  }

  agregarEducacion() {
    (<FormArray>this.curriculumForm.controls['educacion']).push(
      new FormGroup({
        anio: new FormControl('', Validators.required),
        institucion: new FormControl('', Validators.required),
        carrera: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required)
      })
    );
  }

  eliminarEducacion() {
    const length = (<FormArray>this.curriculumForm.controls['educacion']).length;
    (<FormArray>this.curriculumForm.controls['educacion']).removeAt(length - 1);
  }

  agregarExperiencia() {
    (<FormArray>this.curriculumForm.controls['experiencia']).push(
      new FormGroup({
        anio: new FormControl('', Validators.required),
        institucion: new FormControl('', Validators.required),
        puesto: new FormControl('', Validators.required),
        descripcion: new FormControl('', Validators.required)
      })
    );
  }

  eliminarExperiencia() {
    const length = (<FormArray>this.curriculumForm.controls['experiencia']).length;
    (<FormArray>this.curriculumForm.controls['experiencia']).removeAt(length - 1);
  }


  validarDominioMail(control: FormControl): { [s: string]: boolean } {
    return control.value.includes("@gmail") ? null : { nogmail: true };
  }

  validarApodo(control: FormControl): Promise<any> | Observable<any> {

    let promesa = new Promise((resolve, reject) => {
      setTimeout(
        () => control.value !== "tonto" ? resolve(null) : resolve({ apodoInvalido: true }), 2000
      )
    });

    return promesa;
  }
}
