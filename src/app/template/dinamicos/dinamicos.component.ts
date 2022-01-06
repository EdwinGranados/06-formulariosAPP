import { Component, OnInit } from '@angular/core';
import { FactoryOrValue } from 'rxjs';
interface Persona {
  nombre: string;
  favoritos: Favorito[]
}
interface Favorito {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Edwin',
    favoritos: [
      { id: 1, nombre: 'League of Legends' },
      { id: 2, nombre: 'Valorant' },
    ]
  }

  nuevoJuego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('formulario Posteado')
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  agregarjuego(){
    const nuevoFavortio:Favorito = {
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    }
    this.persona.favoritos.push(nuevoFavortio)
    this.nuevoJuego = ''
  }

}
