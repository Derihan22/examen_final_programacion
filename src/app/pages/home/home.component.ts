import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  darkMode: boolean = false;

  constructor(private router: Router) {}

  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToResume() {
    this.router.navigate(['/resume']);
  }
}
