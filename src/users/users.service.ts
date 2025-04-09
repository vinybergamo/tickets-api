import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async me(id: Id) {
    return this.usersRepository.findByIdOrFail(id);
  }

  async delete(id: Id) {
    const user = await this.usersRepository.findByIdOrFail(id);

    return this.usersRepository.delete(user.id);
  }
}
