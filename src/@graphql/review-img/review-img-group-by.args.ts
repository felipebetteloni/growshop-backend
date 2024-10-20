import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewImgWhereInput } from './review-img-where.input';
import { Type } from 'class-transformer';
import { ReviewImgOrderByWithAggregationInput } from './review-img-order-by-with-aggregation.input';
import { ReviewImgScalarFieldEnum } from './review-img-scalar-field.enum';
import { ReviewImgScalarWhereWithAggregatesInput } from './review-img-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewImgCountAggregateInput } from './review-img-count-aggregate.input';
import { ReviewImgMinAggregateInput } from './review-img-min-aggregate.input';
import { ReviewImgMaxAggregateInput } from './review-img-max-aggregate.input';

@ArgsType()
export class ReviewImgGroupByArgs {

    @Field(() => ReviewImgWhereInput, {nullable:true})
    @Type(() => ReviewImgWhereInput)
    where?: ReviewImgWhereInput;

    @Field(() => [ReviewImgOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewImgOrderByWithAggregationInput>;

    @Field(() => [ReviewImgScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewImgScalarFieldEnum>;

    @Field(() => ReviewImgScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewImgScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewImgCountAggregateInput, {nullable:true})
    _count?: ReviewImgCountAggregateInput;

    @Field(() => ReviewImgMinAggregateInput, {nullable:true})
    _min?: ReviewImgMinAggregateInput;

    @Field(() => ReviewImgMaxAggregateInput, {nullable:true})
    _max?: ReviewImgMaxAggregateInput;
}
