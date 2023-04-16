import {
  COMMON_CONTAINER_ITEMS,
  Inject,
  Injectable,
} from 'src/shared/domain/CommonContainerItems';
import { MotelRepository } from '../../domain/MotelRepository';
import { MotelCreatePayload } from './MotelCreatePayload';
import { MOTEL_CONTAINER_ITEMS } from 'src/motel/domain/MotelContainerItems';
import { IdGenerator } from 'src/shared/domain/IdGenerator';
import { Motel } from 'src/motel/domain/Motel';

@Injectable()
export class MotelCreateUseCase {
  constructor(
    @Inject(MOTEL_CONTAINER_ITEMS.REPOSITORY)
    private motelRepo: MotelRepository,

    @Inject(COMMON_CONTAINER_ITEMS.ID_GENERATOR)
    private idGenerator: IdGenerator,
  ) {}

  async execute(input: MotelCreatePayload): Promise<Motel> {
    const id = await this.idGenerator.getId();
    console.log('new id', id);
    return this.motelRepo.create({ id, ...input });
  }
}
