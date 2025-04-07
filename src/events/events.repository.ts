import { Injectable } from '@nestjs/common';
import { Event } from './entities/Event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '@/database/base-repository';

@Injectable()
export class EventsRepository extends BaseRepository<Event> {
  constructor(
    @InjectRepository(Event)
    private readonly EventRepository: Repository<Event>,
  ) {
    super(EventRepository);
  }
}
