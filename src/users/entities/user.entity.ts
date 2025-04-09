import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { BaseSchema } from 'src/database/base-schema';
import { Exclude } from 'class-transformer';
import { hashSync, compareSync, genSaltSync } from 'bcrypt';
import { Event } from '@/events/entities/event.entity';

@Entity()
export class User extends BaseSchema {
  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column('text', { default: [], array: true })
  permissions: string[];

  @OneToMany(() => Event, (event) => event.user, {
    cascade: ['insert', 'update', 'remove', 'soft-remove'],
  })
  events: Event[];

  hashPassword() {
    const salt = genSaltSync(10);
    const hash = hashSync(this.password, salt);
    this.password = hash;
  }

  passwordMatch(password: string): boolean {
    return compareSync(password, this.password);
  }

  @BeforeInsert()
  beforeInsertActions() {
    this.hashPassword();
  }
}
