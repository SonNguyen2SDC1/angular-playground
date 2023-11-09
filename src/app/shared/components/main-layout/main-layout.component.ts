import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';

export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  text?: string;
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    HeaderComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  showFiller = false;
}
