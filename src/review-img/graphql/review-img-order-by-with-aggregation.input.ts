import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReviewImgCountOrderByAggregateInput } from './review-img-count-order-by-aggregate.input';
import { ReviewImgMaxOrderByAggregateInput } from './review-img-max-order-by-aggregate.input';
import { ReviewImgMinOrderByAggregateInput } from './review-img-min-order-by-aggregate.input';

@InputType()
export class ReviewImgOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imgUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => ReviewImgCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewImgCountOrderByAggregateInput;

    @Field(() => ReviewImgMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewImgMaxOrderByAggregateInput;

    @Field(() => ReviewImgMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewImgMinOrderByAggregateInput;
}
