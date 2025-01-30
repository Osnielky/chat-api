import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsInt,
  Min,
  MaxLength,
  IsBoolean,
} from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  address: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  country: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  postalCode?: string;

  @IsEmail()
  @IsOptional()
  contactEmail?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  contactPhone?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  website?: string;

  @IsInt()
  @IsOptional()
  @Min(1)
  employeeCount?: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
