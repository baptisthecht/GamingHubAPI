import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class createGameActivityDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly gameId: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly points: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly won: boolean;

  @ApiProperty()
  readonly tries: number;
}
