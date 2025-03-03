import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class localstrategy extends PassportStrategy(Strategy) {
  //Прослойка для локальной авторизации
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = this.authService.validateUser(email, password);
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if (!user) {
      throw new UnauthorizedException('User or password are incorrect!');
    }
    return user;
  }
}
