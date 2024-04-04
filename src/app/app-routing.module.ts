import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes principales
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

//Contenido individual
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CertificadosComponent } from './components/certificados/certificados.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'tecnologias', component: TecnologiasComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'certificados', component: CertificadosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
