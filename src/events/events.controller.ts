import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { Permissions } from '@/helpers/decorators/permissions.decorator';
import { CreateEventDto } from './dto/create-event.dto';
import { Me } from '@/helpers/decorators/me.decorator';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getEvents() {
    return this.eventsService.list();
  }

  @Permissions(['events:create'])
  @Post()
  async createEvent(
    @Body() createEventDto: CreateEventDto,
    @Me() me: UserRequest,
  ) {
    return this.eventsService.create(createEventDto, me.id);
  }
}
