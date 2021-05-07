import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
            <h1>{{ titulo}}</h1>
            <h3>Labase es: <strong>{{ base }}</strong> </h3>

            <button (click)="acumular(true)"> +{{ base }} </button>

            <span> {{ numero }} </span>

            <button (click)="acumular( false )"> -{{ base }} </button>
    `
})
export class ContadorComponent{

    titulo: string = 'Contandor App';
    numero: number = 0 ;
    base: number = 5;

    acumular ( valor: boolean ): number {
        return valor ? this.numero += this.base : this.numero -= this.base;
    }

}
