import { ConfigService } from '@nestjs/config';
import * as Datastore from 'nedb';
import { Injectable } from 'src/shared/domain/CommonContainerItems';
import { MotelRepository } from '../domain/MotelRepository';
import { Motel } from '../domain/Motel';

@Injectable()
export class MotelNeDBRepository implements MotelRepository {
  private db: Datastore;

  constructor(configService: ConfigService) {
    this.db = new Datastore(configService.get('nedb.motelPath'));

    this.db.loadDatabase();
  }

  create(motel: Motel): Promise<Motel> {
    return new Promise((resolve, reject) => {
      this.db.insert({ ...motel, _id: motel.id }, function (err, newDoc) {
        if (err) {
          reject(err);
          return;
        }
        resolve(motel);
      });
    });
  }

  get(motelId: string): Promise<Motel> {
    throw new Error('Method not implemented.');
  }
}
