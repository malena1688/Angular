import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Usuario {
  nombre = signal('Laura');

  cambiarNombre() {
    this.nombre.set('Pedro');
  }
}