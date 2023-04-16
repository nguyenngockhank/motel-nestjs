import { Injectable } from '../domain/CommonContainerItems';
import { IdGenerator } from '../domain/IdGenerator';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UuidIdGenerator implements IdGenerator {
  getId(): Promise<string> {
    return uuidv4();
  }
  getIds(numbers: number): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
}
