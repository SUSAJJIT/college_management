import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRootMessage(): string {
    return 'Welcome to the API! Refer to /api-docs for Swagger documentation.';
  }
}
