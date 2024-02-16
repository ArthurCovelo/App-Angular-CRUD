import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent, MatToolbarModule, MatIconModule, CommonModule, MatCardModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

