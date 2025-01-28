import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { CompanyController } from './modules/company/company.controller';
import { UserModule } from './modules/user/user.module';
import { CompanyService } from './modules/company/company.service';

@Module({
  imports: [CompanyModule, UserModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class AppModule {}
