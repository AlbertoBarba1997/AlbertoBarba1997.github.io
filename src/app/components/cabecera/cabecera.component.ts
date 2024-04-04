import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  constructor(private http: HttpClient) {}

  descargarPDF() {
    const rutaArchivo = '../../../assets/CV/CV_Alberto_Barba.pdf';

    this.http.get(rutaArchivo, { responseType: 'blob' })
      .subscribe((data: Blob) => {
        const url = window.URL.createObjectURL(data);
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = url;
        enlaceDescarga.download = 'CV_Alberto_Barba.pdf';
        enlaceDescarga.type = 'application/octet-stream';
        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();
        document.body.removeChild(enlaceDescarga);
        window.URL.revokeObjectURL(url);
      });
  }

  cerrarMenu() {
    // Verificar si el dispositivo es un móvil
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const menuToggle = document.getElementById('menuToggle');
      menuToggle?.click(); // Cerrar el menú desplegable
    }
  }
}
