import { Injectable } from '@angular/core';
import { GraphQLClient, gql } from 'graphql-request';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  private client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient('http://localhost:3000/local/desafio');
  }

  async login(email: string, password: string) {
    const mutation = gql`
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          company
          name
          email
          password
        }
      }
    `;

    const variables = {
      email,
      password,
    };

    return await this.client.request(mutation, variables);
  }
}
