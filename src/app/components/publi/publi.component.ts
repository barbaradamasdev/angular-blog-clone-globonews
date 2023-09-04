import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publi',
  templateUrl: './publi.component.html',
  styleUrls: ['./publi.component.css']
})
export class PubliComponent {
  @Input()
  photo:string = 'https://github.com/barbaradamasdev/angular-blog/blob/main/src/assets/Anuncio1.gif?raw=true'
}
