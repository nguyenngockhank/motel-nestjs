import { Module } from '@nestjs/common';
import { COMMON_CONTAINER_ITEMS } from '../domain/CommonContainerItems';
import { UuidIdGenerator } from './UuidIdGenerator';

@Module({
  providers: [
    { provide: COMMON_CONTAINER_ITEMS.ID_GENERATOR, useClass: UuidIdGenerator }, // can change solution later
  ],
  exports: [COMMON_CONTAINER_ITEMS.ID_GENERATOR],
})
export class SharedModule {}
