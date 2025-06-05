import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHola(): string {
    return 'Hola';
  }
  getHello(): string {
    return 'Hello';
  }
  getHelloFrances(): string {
    return 'Bonjour nicole';
  } 
}
