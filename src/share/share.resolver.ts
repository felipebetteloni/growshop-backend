import { ShareService } from "src/share/share.service";
import {
  Share,
  FindFirstShareArgs,
  FindUniqueShareArgs,
  FindManyShareArgs,
  ShareGroupBy,
  ShareGroupByArgs,
  AggregateShare,
  ShareAggregateArgs,
  CreateOneShareArgs,
  CreateManyShareArgs,
  UpdateOneShareArgs,
  UpdateManyShareArgs,
  DeleteOneShareArgs,
  DeleteManyShareArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Share)
export class ShareResolver {
  constructor(private readonly shareService: ShareService) {}

  @Query(() => Share, { nullable: false })
  findFirstShare(@Args() args: FindFirstShareArgs) {
    this.shareService.findFirst(args);
  }

  @Query(() => Share, { nullable: false })
  findUniqueShare(@Args() args: FindUniqueShareArgs) {
    return this.shareService.findUnique(args);
  }

  @Query(() => [Share], { nullable: false })
  listShares(@Args() args: FindManyShareArgs) {
    return this.shareService.findMany(args);
  }

  @Query(() => [ShareGroupBy], { nullable: false })
  groupByShare(@Args() args: ShareGroupByArgs) {
    return this.shareService.groupBy(args);
  }

  @Query(() => AggregateShare, { nullable: false })
  aggregateShare(@Args() args: ShareAggregateArgs) {
    return this.shareService.aggregate(args);
  }

  @Mutation(() => Share, { nullable: true })
  createShare(@Args() args: CreateOneShareArgs) {
    return this.shareService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyShare(@Args() args: CreateManyShareArgs) {
    return this.shareService.createMany(args);
  }

  @Mutation(() => Share, { nullable: true })
  updateShare(@Args() args: UpdateOneShareArgs) {
    return this.shareService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyShare(@Args() args: UpdateManyShareArgs) {
    return this.shareService.updateMany(args);
  }

  @Mutation(() => Share, { nullable: true })
  deleteShare(@Args() args: DeleteOneShareArgs) {
    return this.shareService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyShare(@Args() args: DeleteManyShareArgs) {
    return this.shareService.deleteMany(args);
  }
}
