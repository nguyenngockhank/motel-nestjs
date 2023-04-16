import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { MotelModule } from '../../motel/infra/motel.module';
import { SharedModule } from './shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SharedModule,
    MotelModule,
  ],
})
export class AppModule {}
