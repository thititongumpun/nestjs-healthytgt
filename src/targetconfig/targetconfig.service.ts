import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class TargetconfigService {
  constructor(private prisma: PrismaService) {}

  async getTargetConfigs(accountId: number) {
    return this.prisma.targetConfigs.findMany({
      where: {
        AccountId: accountId,
      },
      select: {
        Id: true,
        CriteriaId: true,
        IsTarget: true,
        CreatedDate: true,
        UpdatedDate: true,
        Criterias: {
          select: {
            Subject: true,
            Qty: true,
            Unit: true,
            IsFix: true,
            CategoryId: true,
            Categories: {
              select: {
                CategoryName: true,
              },
            },
          },
        },
      },
    });
  }
}
