import { HttpException, Injectable } from '@nestjs/common';
import { AccountsService } from './../accounts/accounts.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.accountsService.findOne(email);
    if (user === null) {
      throw new HttpException('User or password is incorrect', 401);
    }
    const isMatch = await bcrypt.compare(pass, user.Password);
    if (!isMatch) {
      throw new HttpException('User or password is incorrect', 401);
    }
    if (user) {
      return user;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.accountsService.findOne(loginDto.email);
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
