import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('cookie')
  getHello(@Res({ passthrough: true }) response): string {
    response.cookie('name', 'Luis', {
      maxAge: 100000,
      httpOnly: false,
    });
    response.cookie('lastname', 'MainJett', {
      maxAge: 100000,
      httpOnly: false,
    });
    response.cookie('ci', '233525', {
      maxAge: 100000,
      httpOnly: false,
    });
    return this.appService.getHello();
  }

  @Post('cookie')
  postCookie(@Res({ passthrough: true }) response): string {
    response.cookie('name', 'Sergio', {
      maxAge: 100000,
      httpOnly: false,
    });
    response.cookie('lastname', 'MainJett', {
      maxAge: 100000,
      httpOnly: false,
    });
    response.cookie('ci', '233525', {
      maxAge: 100000,
      httpOnly: false,
    });
    return this.appService.getHello();
  }
}
