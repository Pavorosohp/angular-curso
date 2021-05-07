import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];

  heroeBorrado: ( string | undefined ) = '';

  constructor() {
    console.log( 'constructor' );
  }

  ngOnInit(): void {
    console.log( 'oninit' );
  }

  borrarHeroe(): void {
    this.heroeBorrado =  this.heroes.shift();
  }

  heroeBorradoIsEmpty(): boolean {
    return  this.heroeBorrado !== undefined && this.heroeBorrado.length > 0;
  }

}
