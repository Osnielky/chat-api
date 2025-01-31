import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  async findAll() {
    const response = await this.companyService.findAll();
    if (!response) {
      throw new NotFoundException('No companies found');
    }
    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.companyService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return await this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.companyService.remove(+id);
  }
}
