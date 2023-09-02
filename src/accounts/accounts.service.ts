import { Injectable } from '@nestjs/common';
import { Accounts } from '@prisma/client';
import { PrismaService } from 'src/providers/prisma/prisma.module';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<Accounts | undefined> {
    return this.prisma.accounts.findFirst({
      where: {
        Email: email,
      },
    });
  }
}
