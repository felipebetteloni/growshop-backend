import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Comment, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class CommentService extends BaseCrudService<
  Comment,
  Prisma.CommentFindFirstArgs,
  Prisma.CommentFindUniqueArgs,
  Prisma.CommentFindManyArgs,
  Prisma.CommentGroupByArgs,
  Prisma.CommentAggregateArgs,
  Prisma.CommentCreateArgs,
  Prisma.CommentCreateManyArgs,
  Prisma.CommentUpdateArgs,
  Prisma.CommentUpdateManyArgs,
  Prisma.CommentDeleteArgs,
  Prisma.CommentDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
