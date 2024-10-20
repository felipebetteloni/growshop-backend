import { ReportService } from "src/report/report.service";
import {
  Report,
  FindFirstReportArgs,
  FindUniqueReportArgs,
  FindManyReportArgs,
  ReportGroupBy,
  ReportGroupByArgs,
  AggregateReport,
  ReportAggregateArgs,
  CreateOneReportArgs,
  CreateManyReportArgs,
  UpdateOneReportArgs,
  UpdateManyReportArgs,
  DeleteOneReportArgs,
  DeleteManyReportArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Report)
export class ReportResolver {
  constructor(private readonly reportService: ReportService) {}

  @Query(() => Report, { nullable: false })
  findFirstReport(@Args() args: FindFirstReportArgs) {
    this.reportService.findFirst(args);
  }

  @Query(() => Report, { nullable: false })
  findUniqueReport(@Args() args: FindUniqueReportArgs) {
    return this.reportService.findUnique(args);
  }

  @Query(() => [Report], { nullable: false })
  listReports(@Args() args: FindManyReportArgs) {
    return this.reportService.findMany(args);
  }

  @Query(() => [ReportGroupBy], { nullable: false })
  groupByReport(@Args() args: ReportGroupByArgs) {
    return this.reportService.groupBy(args);
  }

  @Query(() => AggregateReport, { nullable: false })
  aggregateReport(@Args() args: ReportAggregateArgs) {
    return this.reportService.aggregate(args);
  }

  @Mutation(() => Report, { nullable: true })
  createReport(@Args() args: CreateOneReportArgs) {
    return this.reportService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyReport(@Args() args: CreateManyReportArgs) {
    return this.reportService.createMany(args);
  }

  @Mutation(() => Report, { nullable: true })
  updateReport(@Args() args: UpdateOneReportArgs) {
    return this.reportService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyReport(@Args() args: UpdateManyReportArgs) {
    return this.reportService.updateMany(args);
  }

  @Mutation(() => Report, { nullable: true })
  deleteReport(@Args() args: DeleteOneReportArgs) {
    return this.reportService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyReport(@Args() args: DeleteManyReportArgs) {
    return this.reportService.deleteMany(args);
  }
}
