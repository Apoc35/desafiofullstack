import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginpageComponent, ErrorpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bondyfrontend';
}
