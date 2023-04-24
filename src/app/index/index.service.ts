
import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  notified: boolean;
}

@Injectable()
export class IndexService {
  private users: User[] = [];

    getHello(): string {
        return "Hello world"
    }

}