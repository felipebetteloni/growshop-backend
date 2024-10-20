import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { User, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class UserService extends BaseCrudService<
  User,
  Prisma.UserFindFirstArgs,
  Prisma.UserFindUniqueArgs,
  Prisma.UserFindManyArgs,
  Prisma.UserGroupByArgs,
  Prisma.UserAggregateArgs,
  Prisma.UserCreateArgs,
  Prisma.UserCreateManyArgs,
  Prisma.UserUpdateArgs,
  Prisma.UserUpdateManyArgs,
  Prisma.UserDeleteArgs,
  Prisma.UserDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
