import { Injectable, Inject } from '@nestjs/common';

export { Injectable, Inject }; // in future, I can replace with another DI container library with same interface

export const COMMON_CONTAINER_ITEMS = {
  ID_GENERATOR: Symbol('ID_GENERATOR'),
};
