import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  private unusedVar = 'I am not used';

  // This method parameter is unused
  getHello(unusedParam: string): string {
    // No usage of `unusedParam` or `unusedVar`
    return 'Hello World!';
  }
}
