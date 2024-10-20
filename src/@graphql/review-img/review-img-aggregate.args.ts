import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewImgWhereInput } from './review-img-where.input';
import { Type } from 'class-transformer';
import { ReviewImgOrderByWithRelationInput } from './review-img-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewImgWhereUniqueInput } from './review-img-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewImgCountAggregateInput } from './review-img-count-aggregate.input';
import { ReviewImgMinAggregateInput } from './review-img-min-aggregate.input';
import { ReviewImgMaxAggregateInput } from './review-img-max-aggregate.input';

@ArgsType()
export class ReviewImgAggregateArgs {

    @Field(() => ReviewImgWhereInput, {nullable:true})
    @Type(() => ReviewImgWhereInput)
    where?: ReviewImgWhereInput;

    @Field(() => [ReviewImgOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewImgOrderByWithRelationInput>;

    @Field(() => ReviewImgWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewImgWhereUniqueInput, 'id'>;

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
