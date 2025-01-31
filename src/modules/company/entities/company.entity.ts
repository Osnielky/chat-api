import { Entity, PrimaryGeneratedColumn, Column, AfterUpdate, AfterInsert } from 'typeorm';
@Entity()
export class Company {   
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;

  @Column()
  contactEmail: string;

  @Column()
  contactPhone: string;

  @Column()
  website: string;

  @Column()
  employeeCount: number;

  @Column()
  isActive: boolean;


@AfterUpdate()
logUpdate() {
    console.log('Updated Company with id: ' + this.id);
  }
@AfterInsert ()
logInsert() {
console.log('Inserted Company with id: ' + this.id);
}




}
