import { Controller } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
}
