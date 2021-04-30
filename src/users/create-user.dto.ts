import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@email.com', description: 'Email address' })
  readonly email: string;
  @ApiProperty({ example: '123456', description: 'User password' })
  readonly password: string;
}
