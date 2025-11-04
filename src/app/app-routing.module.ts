import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const nombreTitulo = 'Matías Alfaro - '

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent, 
        title: `${nombreTitulo} Portofolio`
    },
    {
        path: 'proyectos', 
        component: ProyectosComponent, 
        title: `${nombreTitulo} Proyectos`
    },
    {
        path: 'sobre-mi',
        component: SobreMiComponent,
        title: `${nombreTitulo} Sobre mí`
    },
    {
        path: 'contacto',
        component: ContactoComponent,
        title: `${nombreTitulo} Contacto`
    },

    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
