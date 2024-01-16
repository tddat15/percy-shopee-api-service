import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

class SignUpBody {
  @ApiProperty({
    description: 'Name of user',
    example: 'Dat Thai',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Username of user',
    example: 'tddat15',
  })
  @IsString()
  username: string;

  @ApiProperty({
    enum: UserType,
    example: UserType.ADMIN,
  })
  @IsEnum(UserType)
  userType: UserType;

  @ApiProperty({
    description: 'Username of user',
    example: 'tddat15',
  })
  email: string;

  @ApiProperty({
    description: 'Username of user',
    example: 'tddat15',
  })
  password: string;
}

export class LoginRequestBody {
  @ApiProperty({
    description: 'user',
    example: SignUpBody,
  })
  user: SignUpBody;
}
