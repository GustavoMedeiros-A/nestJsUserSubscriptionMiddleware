import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from "@nestjs/core"

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = {
      name: "Mario",
      roles: ["admin"],
      // roles: ["standard-user"],
    };

    const roles = this.reflector.get<string>("roles", context.getHandler());

    console.log(roles)

    if(!roles) {
      return true
    }

    const requiredRoles = "admin";

    // Not Authorized
    if (!user.roles.includes(requiredRoles)) {
      return false
  }
    return true;
  }
}
