import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { CompanyController } from './modules/company/company.controller';
import { UserModule } from './modules/user/user.module';
import { CompanyService } from './modules/company/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Type } from 'class-transformer';
import { config } from 'dotenv';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: configService.get('DB_SYNC') === 'true',
      }),
    }),

    CompanyModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
