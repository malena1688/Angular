import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  @Input() company: string = '';

  @Output() aviso = new EventEmitter<void>();

  enviarAviso() {
    this.aviso.emit();
  }
  recibirAviso() {
  alert('¡El Footer ha enviado un aviso!');
}
}