import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes:
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PortadaComponent } from './components/portada/portada.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

// Traductor:
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwichComponent } from './components/traductor/swich/swich.component';
import { CertificadosComponent } from './components/certificados/certificados.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    SobremiComponent,
    AboutComponent,
    HomeComponent,
    PortadaComponent,
    TecnologiasComponent,
    ProyectosComponent,
    ContactoComponent,
    SwichComponent,
    CertificadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient]
      }

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/languages/', '.json')
}
