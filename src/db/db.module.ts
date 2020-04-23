import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import {
  TYPEORM_DATABASE,
  TYPEORM_HOST,
  TYPEORM_PASSWORD,
  TYPEORM_PORT,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_USERNAME,
} from './db.constants';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => {
        const conf: TypeOrmModuleOptions = {
          type: 'postgres',
          host: configService.get(TYPEORM_HOST),
          port: Number(configService.get(TYPEORM_PORT)),
          username: configService.get(TYPEORM_USERNAME),
          password: configService.get(TYPEORM_PASSWORD),
          database: configService.get(TYPEORM_DATABASE),
          synchronize: Boolean(configService.get(TYPEORM_SYNCHRONIZE)),
          entities: [join(__dirname, '../entities/**/*.entity{.ts,.js}')],
        };
        return conf;
      },
      inject: [ConfigService],
    }),
  ],
})
export class DBModule {}
