import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReportCountAggregate } from './report-count-aggregate.output';
import { ReportMinAggregate } from './report-min-aggregate.output';
import { ReportMaxAggregate } from './report-max-aggregate.output';

@ObjectType()
export class ReportGroupBy {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => ReportCountAggregate, {nullable:true})
    _count?: ReportCountAggregate;

    @Field(() => ReportMinAggregate, {nullable:true})
    _min?: ReportMinAggregate;

    @Field(() => ReportMaxAggregate, {nullable:true})
    _max?: ReportMaxAggregate;
}
