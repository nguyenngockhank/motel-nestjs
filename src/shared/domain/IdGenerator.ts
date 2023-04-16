import { ObjectId } from './ObjectId';

export interface IdGenerator {
  getId(): Promise<ObjectId>;
  getIds(numbers: number): Promise<ObjectId[]>;
}
