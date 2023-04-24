import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)
    return {
      name: value.name,
      age: value.age,
      active: value.active,
      email: value.email

    }
  }
}
