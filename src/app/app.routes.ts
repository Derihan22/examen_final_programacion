import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Página principal
  { path: 'profile', component: ProfileComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', redirectTo: '' }  // Redirige a la página principal para rutas no encontradas
];

