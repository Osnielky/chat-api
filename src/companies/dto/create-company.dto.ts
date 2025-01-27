import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateCompanyDto {

  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsUrl()
  website?: string;
}
