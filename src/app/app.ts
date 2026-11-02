
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica1');
  nombre: string = 'Carlos';
  edad: number = 25;
  botonDesactivado: boolean = true;
  mensaje: string = 'Todavía no has pulsado el botón';

mostrarMensaje(): void {
  this.mensaje = '¡Has pulsado el botón!';
}
}
