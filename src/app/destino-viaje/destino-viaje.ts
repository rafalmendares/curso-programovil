import { Component, HostBinding, Input } from '@angular/core';
import { DestinoViajeModel } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.html',
  styleUrl: './destino-viaje.css'
})
export class DestinoViaje {
  @Input() destino!: DestinoViajeModel;
  @HostBinding('attr.class') cssClass = 'col-md-4 mb-3';
}