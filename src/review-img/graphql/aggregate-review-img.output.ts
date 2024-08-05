import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReviewImgCountAggregate } from './review-img-count-aggregate.output';
import { ReviewImgMinAggregate } from './review-img-min-aggregate.output';
import { ReviewImgMaxAggregate } from './review-img-max-aggregate.output';

@ObjectType()
export class AggregateReviewImg {

    @Field(() => ReviewImgCountAggregate, {nullable:true})
    _count?: ReviewImgCountAggregate;

    @Field(() => ReviewImgMinAggregate, {nullable:true})
    _min?: ReviewImgMinAggregate;

    @Field(() => ReviewImgMaxAggregate, {nullable:true})
    _max?: ReviewImgMaxAggregate;
}
