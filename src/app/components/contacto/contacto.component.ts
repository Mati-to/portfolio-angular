import { Component, ViewChild } from '@angular/core';
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
    ancho: string = '25';
    bloqueoTemporal: boolean = false;
    rrss = [
        {
            link: "https://github.com/Mati-to",
            nombre: "github"
        },
        {
            link: "https://www.linkedin.com/in/matiasalfaroc/",
            nombre: "linkedin"
        },
        {
            link: "mailto:matiasalfaro.it@gmail.com",
            nombre: "email"
        },
    ];

    @ViewChild('successSwal') successSwal!: SwalComponent;
    @ViewChild('errorSwal') errorSwal!: SwalComponent;

    form = {
        asunto: "",
        nombre_emisor: "",
        mensaje: "",
        email: "",
    };

    enviarEmail(){
        if (this.bloqueoTemporal) return;

        this.bloqueoTemporal = true;
        setTimeout(() => {
            this.bloqueoTemporal = false;
        }, 10000);

        emailjs
            .send(
                "service_l8yole9", // ID del servicio
                "template_xm7kzi7",  // Template del correo
                this.form,
                "gxpQbRcdF1FjCJ_hM"  // Llave pública
            )
            .then(() => {
                this.successSwal.fire();
                this.form = { asunto: '', nombre_emisor: '', mensaje: '', email: '' };
            })
            .catch(() => {
                this.errorSwal.fire();
            });
    }
}
