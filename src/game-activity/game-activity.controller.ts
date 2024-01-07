import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { GameActivityService } from './game-activity.service';
import { createGameActivityDto } from './dto/createGameActivity.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Game Activity')
@Controller('game-activity')
export class GameActivityController {
  constructor(private readonly gameAtivityService: GameActivityService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(@Body() body: createGameActivityDto, @Req() request: Request | any) {
    const senderId = request.user['id'];
    return this.gameAtivityService.create(body, senderId);
  }
}
