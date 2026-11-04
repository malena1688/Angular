
import { Component, inject, signal, computed } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Footer } from './footer/footer';
import { LowerCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { Usuario } from './usuario';
import { RouterLink, RouterOutlet, RouterLinkActive, } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Footer, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica1');
  nombre: string = 'Carlos';
  edad: number = 25;
  ciudad: string = 'Madrid';
  botonDesactivado: boolean = true;
  mensaje: string = 'Todavía no has pulsado el botón';
  imagen: string = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';


mostrarMensaje(): void {
  this.mensaje = '¡Has pulsado el botón!';
}
contador: number = 0;

sumar() {
  this.contador++;
}
mostrarMensaje2: boolean = true;
frutas: string[] = ['Manzana', 'Pera', 'Plátano'];

agregarFruta() {
  this.frutas.push('Naranja');
}
vaciarFrutas() {
  this.frutas = [];
}
nombre2: string = 'ana';
nombre22: string = 'MARÍA';
fecha: Date = new Date(2026, 10, 4);

precio: number = 25;

precio2: number = 75;
nombreEmpresa: string = 'Mi Empresa S.A.';
usuario = inject(Usuario);

contador2 = signal(0);

sumar2() {
  this.contador2.update(valor => valor + 1);
}
precio222 = signal(10);
cantidad = signal(3);

total = computed(() => this.precio222() * this.cantidad());
nombreUsuario2: string = '';
nombreUsuario: string = '';
edadUsuario: number = 18;

saludar() {
  alert('Hola, ' + this.nombreUsuario);
}
enviarFormulario() {
  alert('Formulario enviado correctamente');
}
enviarFormulario() {
  alert(
    'Nombre: ' + this.nombreUsuario +
    '\nEdad: ' + this.edadUsuario
  );
}
}

