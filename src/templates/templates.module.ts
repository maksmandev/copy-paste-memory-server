import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TemplatesService } from './templates.service';
import { TemplatesController } from './templates.controller';
import { TemplatesRepository } from '../entities/template/template.repository';

@Module({
  providers: [TemplatesService],
  imports: [TypeOrmModule.forFeature([TemplatesRepository])],
  controllers: [TemplatesController],
})
export class TemplatesModule {}
