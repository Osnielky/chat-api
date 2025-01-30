import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

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

}
