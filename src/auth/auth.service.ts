import { HttpException, Injectable } from '@nestjs/common';
import { AccountsService } from './../accounts/accounts.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.accountsService.findOne(email);
    if (user === null) {
      throw new HttpException('User or password is incorrect', 401);
    }
    const isMatch = await bcrypt.compare(pass, user.Password);
    if (!isMatch) {
      throw new HttpException('User or password is incorrect', 401);
    }
    const payload = { sub: user.Id, email: user.Email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
