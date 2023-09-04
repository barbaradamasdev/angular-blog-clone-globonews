import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css', './menu-principal.responsive.component.css']
})
export class MenuPrincipalComponent {
  navfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navfixed = true;
    } else {
      this.navfixed = false;
    }
  }

}
