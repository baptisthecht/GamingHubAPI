import { Module } from '@nestjs/common';
import { GameActivityService } from './game-activity.service';
import { GameActivityController } from './game-activity.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'HEY',
    }),
  ],
  providers: [GameActivityService, JwtStrategy],
  controllers: [GameActivityController],
})
export class GameActivityModule {}
