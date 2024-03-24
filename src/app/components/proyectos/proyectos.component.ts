import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  projects: any[] = [];
  numProjectsToShow: number = 3;
  isLoading: boolean = true;

  techToIconClass = {
    "CSS": "bi bi-filetype-css",
    "HTML": "bi bi-filetype-html",
    "JavaScript": "bi bi-filetype-js",
    "Bootstrap": "bi bi-bootstrap",
    "Git": "bi bi-git",
    "sass": "bi bi-filetype-sass",
    "react": "bi bi-filetype-jsx",
  };

  constructor() { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    // Simulamos la carga de proyectos estáticos
    setTimeout(() => {
      this.projects = [
        {
          name: 'Frisbillanas web y API REST \n(Trabajo de Final de Grado)',
          imageSrc: '../../../assets/proyecto/pr11.png',
          technologies: ['Página web: Angular', 'Servidor: NodeJS', 'Base de Datos: MongoDB (NoSQL)', 'HTTP Client' ,'JWT Autentication Tokens', 'Bootstrap'],
          githubLink: 'https://github.com/AlbertoBarba1997/frisbillanas-web',
          liveDemoLink: 'https://docs.google.com/document/d/11sLG9QT-Rkgwf2QYRPXhLa6QtUttn2nv1TMegPTDj48/edit?usp=sharing'
        },
        {
          name: 'Porfolio',
          imageSrc: '../../../assets/proyecto/pr22.png',
          technologies: ['Angular'],
          githubLink: 'https://github.com/AlbertoBarba1997/AlbertoBarba1997.github.io',
          liveDemoLink: 'https://albertobarba1997.github.io/'
        },
        {
          name: 'Portal de Cita Previa: \nJunta de Andalucía',
          imageSrc: '../../../assets/proyecto/pr33.png',
          technologies: ['Java Spring', 'SQL Server'],
          githubLink: '',
          liveDemoLink: 'https://tuturno.juntadeandalucia.es/citaprevia/#no-back-button'
        }

      ];
      this.isLoading = false;
    }, 2000); // Simulamos un retraso de 2 segundos para cargar los proyectos
  }

  handleClick(): void {
    this.numProjectsToShow += 4;
  }

  getIconClass(tech: string): string {

    // @ts-ignore
    return this.techToIconClass[tech] ;
  }
}
