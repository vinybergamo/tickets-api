import { Column, Entity } from 'typeorm';
import { BaseSchema } from '../../database/base-schema';

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
}
