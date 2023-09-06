import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  VERSION_NEUTRAL,
  Version,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { AccountDto } from 'src/accounts/dto/account.dto';
// import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from 'src/helpers/constants';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async signIn(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Version(VERSION_NEUTRAL)
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req) {
    return new AccountDto(req.user);
  }
}
