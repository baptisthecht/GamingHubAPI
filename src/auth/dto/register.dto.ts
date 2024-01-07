import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class registerDto {
  @ApiProperty({ example: 'jhon_doe', description: 'This is the username.' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    example: 'jhon_doe@example.com',
    description: 'This is the user email.',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: '12345678',
    description: 'This is the user password.',
  })
  @IsNotEmpty()
  readonly password: string;
}
