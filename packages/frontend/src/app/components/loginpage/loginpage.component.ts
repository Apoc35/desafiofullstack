import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphqlService } from '../../services/graphql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css',
})
export class LoginpageComponent {
  email: string = '';
  password: string = '';

  constructor(
    private graphqlService: GraphqlService,
    private router: Router,
  ) {}

  resetFields() {
    this.email = '';
    this.password = '';
  }

  async onLogin() {
    try {
      const response = await this.graphqlService.login(
        this.email,
        this.password,
      );
      console.log('Login response:', response);
      this.router.navigate(['/sucess']);
    } catch (error) {
      console.error('Error during login:', error);
      this.router.navigate(['/error']);
    }
  }
}
