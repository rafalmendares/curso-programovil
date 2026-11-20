import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DestinoViajeModel } from '../models/destino-viaje.model';
import { DestinoViaje } from '../destino-viaje/destino-viaje';

@Component({
  selector: 'app-lista-destinos',
  imports: [NgFor, DestinoViaje],
  templateUrl: './lista-destinos.html',
  styleUrl: './lista-destinos.css'
})
export class ListaDestinos {
  destinos: DestinoViajeModel[] = [
    new DestinoViajeModel('Roatán', 'https://picsum.photos/380/230?random=1'),
    new DestinoViajeModel('Copán Ruinas', 'https://picsum.photos/380/230?random=2')
  ];

  guardar(nombre: string, url: string): boolean {
    this.destinos.push(new DestinoViajeModel(nombre, url));
    return false;
  }
}