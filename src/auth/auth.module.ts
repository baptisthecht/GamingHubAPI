import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy.service';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'HEY',
    }),
    // ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
