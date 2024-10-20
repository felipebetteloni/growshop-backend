import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BannerCountOrderByAggregateInput } from './banner-count-order-by-aggregate.input';
import { BannerAvgOrderByAggregateInput } from './banner-avg-order-by-aggregate.input';
import { BannerMaxOrderByAggregateInput } from './banner-max-order-by-aggregate.input';
import { BannerMinOrderByAggregateInput } from './banner-min-order-by-aggregate.input';
import { BannerSumOrderByAggregateInput } from './banner-sum-order-by-aggregate.input';

@InputType()
export class BannerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    imgUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    link?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sorting?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    viewCount?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    clickCount?: SortOrderInput;

    @Field(() => BannerCountOrderByAggregateInput, {nullable:true})
    _count?: BannerCountOrderByAggregateInput;

    @Field(() => BannerAvgOrderByAggregateInput, {nullable:true})
    _avg?: BannerAvgOrderByAggregateInput;

    @Field(() => BannerMaxOrderByAggregateInput, {nullable:true})
    _max?: BannerMaxOrderByAggregateInput;

    @Field(() => BannerMinOrderByAggregateInput, {nullable:true})
    _min?: BannerMinOrderByAggregateInput;

    @Field(() => BannerSumOrderByAggregateInput, {nullable:true})
    _sum?: BannerSumOrderByAggregateInput;
}
