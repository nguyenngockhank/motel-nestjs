import { Motel } from './Motel';

export interface MotelRepository {
  create(motel: Motel): Promise<Motel>;
  get(motelId: string): Promise<Motel>;
}
