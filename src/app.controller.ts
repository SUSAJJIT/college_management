import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'Welcome to the API! Refer to /api-docs for Swagger documentation.';
  }
}
