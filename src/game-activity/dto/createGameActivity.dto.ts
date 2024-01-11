import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class createGameActivityDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly gameId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly points: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly won: boolean;

  @ApiProperty()
  readonly tries: number;
}
