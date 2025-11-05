import { Component, OnInit } from '@angular/core';
import { IProyecto } from './proyectos.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

    proyectos: IProyecto[] = [
        {
            titulo: "Angular Pokémon", 
            descripcion: "Proyecto realizado con Angular y sus funciones tales como: paginación, " +
                "filtro de data, manejo de API, pipes y servicios.",
            img: "assets/img/proyectos/project-pokemon.png",
            link: "https://6519a4bd3749896a54e29649--rococo-fox-bc8858.netlify.app/",
            github: "https://github.com/Mati-to/angular_pokemon"
        },
        {
            titulo: "Patients Follow-up", 
            descripcion: "Fue construida usando React, lo que me permitió practicar el " + 
                "uso de componentes y Hooks como useState y useEffect. Para dar estilo a la aplicación utilicé Tailwind CSS.",
            img: "assets/img/proyectos/project-patients.png",
            link: "https://fancy-youtiao-271738.netlify.app/",
            github: "https://github.com/Mati-to/slp-followup"
        },
        {
            titulo: "Bingo/Lota", 
            descripcion: "Mi primer proyecto básico teniendo de inspiración a mi familia con la " +
            "cual jugamos Lota en el sur. Usando HTML, CSS y Javascript", 
            img: "assets/img/proyectos/project-bingo.png",
            link: "https://spiffy-bublanina-387eab.netlify.app/",
            github: "https://github.com/Mati-to/loteria-app"
        },
        {
            titulo: "Portafolio Angular",
            descripcion: "Este mismo portafolio!",
            img: "assets/img/proyectos/project-portfolio.jpg",
            link: "https://mati-portafolio.netlify.app/",
            github: "https://github.com/Mati-to/portfolio-angular"
        }
    ]

}
