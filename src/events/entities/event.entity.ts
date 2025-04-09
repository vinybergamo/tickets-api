import { AfterLoad, Column, Entity, ManyToOne } from 'typeorm';
import { BaseSchema } from '../../database/base-schema';
import { User } from '@/users/entities/user.entity';

@Entity()
export class Event extends BaseSchema {
  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  longDescription: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  image: string;

  @Column('text', { array: true, nullable: true })
  lineup: string[];

  @ManyToOne(() => User, (user) => user.events, {
    onDelete: 'CASCADE',
  })
  user: User;

  eventStatus: string;

  @AfterLoad()
  setEventStatus() {
    const now = new Date();
    if (now < this.startDate) {
      this.eventStatus = 'UPCOMING';
    } else if (now > this.endDate) {
      this.eventStatus = 'PAST';
    } else {
      this.eventStatus = 'ONGOING';
    }
  }
}
