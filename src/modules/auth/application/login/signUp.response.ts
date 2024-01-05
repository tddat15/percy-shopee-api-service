import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';

export class SignUpResponse {
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
}
