import { Controller, Get } from '@nestjs/common';
import { EventsService } from './events.service';
import { Permissions } from '@/helpers/decorators/permissions.decorator';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Permissions(['events:read'])
  @Get()
  async getEvents() {
    return [];
  }
}
