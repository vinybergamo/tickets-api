import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Me } from '@/helpers/decorators/me.decorator';
import { Permissions } from '@/helpers/decorators/permissions.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async me(@Me() me: UserRequest) {
    return this.usersService.me(me.id);
  }

  @Permissions(['users:delete'])
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
