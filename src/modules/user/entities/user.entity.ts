import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  firstname: string;

  @Column('text')
  lastname: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id: ' + this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id: ' + this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id: ' + this.id);
  }
}
