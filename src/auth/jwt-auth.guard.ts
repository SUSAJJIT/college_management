import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1];

    if (!token) {
      console.warn('Authorization token missing');
      return false;
    }

    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded; // Attach decoded user information to the request
      return true;
    } catch (error) {
      console.error(
        'JWT verification failed:',
        error instanceof Error ? error.message : error,
      );
      return false;
    }
  }
}
