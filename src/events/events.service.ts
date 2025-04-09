import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { CreateEventDto } from './dto/create-event.dto';
import { UsersRepository } from '@/users/users.repository';

@Injectable()
export class EventsService {
  constructor(
    private readonly eventsRepository: EventsRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async list() {
    return this.eventsRepository.findAll();
  }

  async create(createEventDto: CreateEventDto, userId: Id) {
    const user = await this.usersRepository.findByIdOrFail(userId);
    const event = await this.eventsRepository.create({
      ...createEventDto,
      user,
    });

    return event;
  }
}
