import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'The name of the user' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The email address of the user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    minLength: 8,
    example: 'Example@123',
  })
  @IsNotEmpty()
  @MinLength(8)
  // @Matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   {
  //     message:
  //       'Password too weak. It must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
  //   },
  // )
  password: string;
}
