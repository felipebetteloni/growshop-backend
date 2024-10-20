import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportWhereInput } from './report-where.input';
import { Type } from 'class-transformer';
import { ReportOrderByWithRelationInput } from './report-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReportCountAggregateInput } from './report-count-aggregate.input';
import { ReportMinAggregateInput } from './report-min-aggregate.input';
import { ReportMaxAggregateInput } from './report-max-aggregate.input';

@ArgsType()
export class ReportAggregateArgs {

    @Field(() => ReportWhereInput, {nullable:true})
    @Type(() => ReportWhereInput)
    where?: ReportWhereInput;

    @Field(() => [ReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportOrderByWithRelationInput>;

    @Field(() => ReportWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReportWhereUniqueInput, 'productId' | 'userId_productId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReportCountAggregateInput, {nullable:true})
    _count?: ReportCountAggregateInput;

    @Field(() => ReportMinAggregateInput, {nullable:true})
    _min?: ReportMinAggregateInput;

    @Field(() => ReportMaxAggregateInput, {nullable:true})
    _max?: ReportMaxAggregateInput;
}
