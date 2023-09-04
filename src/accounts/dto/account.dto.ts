import { ApiProperty } from '@nestjs/swagger';
import { Accounts } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class AccountDto implements Accounts {
  constructor(partial: Partial<AccountDto>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  Id: number;
  @ApiProperty()
  Email: string;
  @Exclude()
  Password: string;
  @ApiProperty()
  FirstName: string;
  @ApiProperty()
  LastName: string;
  @ApiProperty()
  Role: number;
  @ApiProperty()
  CreatedDate: Date;
  @ApiProperty()
  UpdatedDate: Date;
  @ApiProperty()
  ResetToken: string;
  @ApiProperty()
  ResetTokenExpires: Date;
  @ApiProperty()
  PasswordReset: Date;
  @ApiProperty()
  DeviceId: string;
  @ApiProperty()
  ImageUrl: string;
}
