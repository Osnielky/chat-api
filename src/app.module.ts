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
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      synchronize: process.env.DB_SYNC == 'true',
      autoLoadEntities: true,
      logger: 'file',
      logging: ['error'],
    }),
    CompanyModule,
    UserModule,
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class AppModule {}
