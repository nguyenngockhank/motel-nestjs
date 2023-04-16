import { Injectable } from 'src/shared/domain/CommonContainerItems';
import { MotelCreatePayload } from '../use-cases/MotelCreate/MotelCreatePayload';
import { Body, Controller, Post } from '@nestjs/common';
import { MotelCreateUseCase } from '../use-cases/MotelCreate/MotelCreateUseCase';

@Injectable()
@Controller('motel')
export class MotelController {
  constructor(private motelCreate: MotelCreateUseCase) {}

  @Post('/')
  create(@Body() payload: MotelCreatePayload) {
    return this.motelCreate.execute(payload);
  }
}
