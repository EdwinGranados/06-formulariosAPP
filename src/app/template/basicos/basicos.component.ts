import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm ={
    producto:'rtx3090',
    precio:0,
    existencias:0
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('posteo Correcto')
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    });
  }

  nombreProductoValido():boolean{
    return  this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
  }

  precioValido():boolean{
    return this.miFormulario?.controls.precio?.invalid && this.miFormulario?.controls.precio?.touched
  }
}
