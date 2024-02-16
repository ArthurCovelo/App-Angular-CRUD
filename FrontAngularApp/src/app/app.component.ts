import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/modelo/header/header.component";
import { FooterComponent } from "./componentes/modelo/footer/footer.component";
import { NavComponent } from './componentes/modelo/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, NavComponent, FontAwesomeModule]
})

export class AppComponent  implements OnInit{
  title = 'FrontAppAngular';
  icon = faCoffee;
  constructor() { }

  ngOnInit(): void {
  }
}
