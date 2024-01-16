import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

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
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Username of user',
    example: 'tddat15',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}

export class SignUpRequestBody {
  @ApiProperty({
    description: 'user',
    example: SignUpBody,
  })
  @Type(() => SignUpBody)
  user: SignUpBody;
}
