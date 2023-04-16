import { Module } from '@nestjs/common';
import { MotelNeDBRepository } from './MotelNeDBRepository';
import { MotelCreateUseCase } from '../use-cases/MotelCreate/MotelCreateUseCase';
import { MOTEL_CONTAINER_ITEMS } from '../domain/MotelContainerItems';
import { SharedModule } from 'src/shared/infra/shared.module';
import { MotelController } from './motel.controller';

@Module({
  imports: [SharedModule],
  controllers: [MotelController],
  providers: [
    // use cases
    MotelCreateUseCase,

    // infra
    MotelNeDBRepository,
    {
      provide: MOTEL_CONTAINER_ITEMS.REPOSITORY,
      useClass: MotelNeDBRepository, // change later
    },
  ],
})
export class MotelModule {}
