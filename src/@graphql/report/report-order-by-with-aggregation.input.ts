import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReportCountOrderByAggregateInput } from './report-count-order-by-aggregate.input';
import { ReportMaxOrderByAggregateInput } from './report-max-order-by-aggregate.input';
import { ReportMinOrderByAggregateInput } from './report-min-order-by-aggregate.input';

@InputType()
export class ReportOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => ReportCountOrderByAggregateInput, {nullable:true})
    _count?: ReportCountOrderByAggregateInput;

    @Field(() => ReportMaxOrderByAggregateInput, {nullable:true})
    _max?: ReportMaxOrderByAggregateInput;

    @Field(() => ReportMinOrderByAggregateInput, {nullable:true})
    _min?: ReportMinOrderByAggregateInput;
}
