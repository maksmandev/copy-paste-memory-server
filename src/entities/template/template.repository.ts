import { EntityRepository, AbstractRepository } from 'typeorm';

import { Template } from './template.entity';

@EntityRepository(Template)
export class TemplatesRepository extends AbstractRepository<Template> {
  public async find() {
    return this.repository.find();
  }
}
