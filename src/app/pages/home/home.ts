import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeLayout } from "../../components/home-layout/home-layout";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    HomeLayout
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  userTitle: string = 'OIIII'

  constructor(
    private router: Router
  ) {}

  navigateToMap() {
    this.router.navigate(['/map']);
  }
}
