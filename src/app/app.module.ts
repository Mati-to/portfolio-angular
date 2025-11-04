import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    SobreMiComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    SweetAlert2Module.forRoot()
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
