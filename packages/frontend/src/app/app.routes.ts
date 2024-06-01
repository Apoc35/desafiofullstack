import { Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { SucesspageComponent } from './components/sucesspage/sucesspage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'error', component: ErrorpageComponent },
  { path: 'sucess', component: SucesspageComponent },
  { path: '**', redirectTo: '' },
];
