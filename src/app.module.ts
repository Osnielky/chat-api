import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { CompanyController } from './modules/company/company.controller';
import { UserModule } from './modules/user/user.module';
import { CompanyService } from './modules/company/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'chatapi_db',
      synchronize: true,
      autoLoadEntities: true, 
      logger: 'file',
      logging: ['error'],
    }),
    CompanyModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
