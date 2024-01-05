import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SignUpRequestBody } from '../application/sign-up/signUp.request-body';

@Injectable()
export class Auth0Service {
  private readonly baseUrl = `https://dev-percies-blog.au.auth0.com`;

  async createUser(body: SignUpRequestBody) {
    const { name, password, username, email, userType } = body.user;

    return await axios.post(`${this.baseUrl}/dbconnections/signup`, {
      client_id: 'WcXtIDCPN9q9shkHUIh9amHT1DNzGsyL',
      connection: 'Username-Password-Authentication',
      email,
      password,
      username,
      name,
      user_metadata: {
        user_type: userType,
      },
    });
  }

  async getUser(userId: string): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/users/${userId}`, {
      headers: {
        Authorization: `Bearer your-auth0-management-api-token`,
      },
    });
    return response.data;
  }
}
