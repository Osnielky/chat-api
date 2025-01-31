import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(company);
  }

  async findAll() {
    return await this.companyRepository.find();
  }

  async findOne(id: number) {
    return this.companyRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCompanyDto: Partial<UpdateCompanyDto>) {
    const company = await this.findOne(id);

    if (!company) {
      throw new Error('Company not found');
    }
    Object.assign(company, updateCompanyDto);
    return await this.companyRepository.save(company);
  }

  async remove(id: number) {
    const company = await this.findOne(id);
    if (!company) {
      throw new Error('Company not found');
    }
    return this.companyRepository.remove(company);
  }
}
