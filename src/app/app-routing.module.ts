import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes principales
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

//Contenido individual
import { AboutComponent } from './components/about/about.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'tecnologias', component: TecnologiasComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'proyectos', component: ProyectosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
