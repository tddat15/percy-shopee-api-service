import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';

class SignUpBody {
  @ApiProperty({
    description: 'Name of user',
    example: 'Dat Thai',
  })
  name: string;

  @ApiProperty({
    description: 'Username of user',
    example: 'tddat15',
  })
  username: string;

  @ApiProperty({
    enum: UserType,
    example: UserType.ADMIN,
  })
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
