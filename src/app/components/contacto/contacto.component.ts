import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  mostrarAlerta: boolean = false;

  copiarCorreo(inputElement: HTMLInputElement) {
    inputElement.select();
    navigator.clipboard.writeText(inputElement.value)
      .then(() => {
        this.mostrarAlerta = true;
        setTimeout(() => {
          this.mostrarAlerta = false;
          inputElement.blur(); // Desenfocar el input
        }, 1500); // 3000 milliseconds = 3 segundos
      })
      .catch(err => {
        console.error('Error al copiar el correo:', err);
      });
  }

  cerrarAlerta() {
    this.mostrarAlerta = false;
  }
}
