import { Injectable } from '@nestjs/common';

import { TemplatesRepository } from '../entities/template/template.repository';

@Injectable()
export class TemplatesService {
  constructor(private readonly templateRepository: TemplatesRepository) {}

  public async getTemplates() {
    return this.templateRepository.find();
  }
}
