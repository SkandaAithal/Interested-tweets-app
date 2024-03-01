import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { User } from '../../users/entities/user.entity';
  
  @Entity('interest')
  export class Interest extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    interest: string;
  
    @ManyToOne(() => User, (user) => user.interests)
    user: User;
  }
  