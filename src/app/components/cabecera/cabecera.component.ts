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
    /*
    const url = '../../../assets/CV_Alberto_Barba.pdf'; // Ruta relativa al archivo PDF en la carpeta assets
    const nombreArchivo = 'CV_Alberto_Barba.pdf'; // Nombre que le darás al archivo descargado
    const link = document.createElement('a');
    link.href = url;
    link.download = nombreArchivo;
    link.click();
    */

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


}
