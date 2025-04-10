import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { BaseSchema } from 'src/database/base-schema';
import { Exclude } from 'class-transformer';
import { hashSync, compareSync, genSaltSync } from 'bcrypt';
import { Event } from '@/events/entities/event.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User extends BaseSchema {
  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'johndoe@email.com',
  })
  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @ApiProperty({
    description: 'User Avatar',
    example: 'https://example.com/avatar.jpg',
  })
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty({
    description: 'User permissions',
    example: ['users:read', 'users:write'],
  })
  @Column('text', { default: [], array: true })
  permissions: string[];

  @OneToMany(() => Event, (event) => event.user, {
    cascade: true,
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
