import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {

    tecnologias = {
        frontend: ["Javascript", "Angular", "React", "Bootstrap"],
        backend: ["NodeJs", "ExpressJs", "Python", "Django", "Java", "Springboot", "PHP"],
        database: ["MySQL", "MongoDB"],
        herramientas: ["Rest API", "Postman", "Git", "GitHub", "VS Code", "Intellij"]
    }


}
