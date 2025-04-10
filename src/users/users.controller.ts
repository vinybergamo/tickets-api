import { Controller, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Me } from '@/helpers/decorators/me.decorator';
import { Permissions } from '@/helpers/decorators/permissions.decorator';
import { Endpoint } from '@/helpers/decorators/endpoint.decorator';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Endpoint({
    method: 'GET',
    summary: 'Get me',
    route: 'me',

    responses: [
      {
        description: 'Get me',
        status: 200,
        type: User,
      },
    ],
  })
  async me(@Me() me: UserRequest) {
    return this.usersService.me(me.id);
  }

  @Permissions(['users:delete'])
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
