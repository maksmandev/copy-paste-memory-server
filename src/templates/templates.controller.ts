import { Controller, Get } from '@nestjs/common';

import { TemplatesService } from './templates.service';
import { Template } from '../entities/template/template.entity';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Get()
  async getTemplates(): Promise<Template[]> {
    return this.templatesService.getTemplates();
  }
}
