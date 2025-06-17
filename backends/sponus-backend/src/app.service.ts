import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const now = new Date().toLocaleString();
    return `This is Sponus! We are Backend Live - ${now}`;
  }
}
