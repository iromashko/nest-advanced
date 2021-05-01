import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'example@email.com', description: 'Email address' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrect Email' })
  readonly email: string;
  @ApiProperty({ example: '123456', description: 'User password' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Min Length 4 and Max Length 16' })
  readonly password: string;
}
