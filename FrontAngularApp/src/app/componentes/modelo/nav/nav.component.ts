import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { SearchService } from '../../../services/search.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [RouterOutlet, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule, RouterLink, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, FooterComponent]
})
export class NavComponent {
  drawerOpened = false;
  value = "";

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }
  constructor(private searchService: SearchService) { }

  // Método que será chamado quando o input no componente de navegação for alterado
  onSearchInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    // Utiliza o serviço para emitir o termo de busca
    this.searchService.setSearchTerm(value);
  }


}

