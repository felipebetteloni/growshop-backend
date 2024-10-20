import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Review } from '../review/review.model';

@ObjectType()
export class ReviewImg {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    imgUrl!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    reviewId!: string;

    @Field(() => Review, {nullable:false})
    review?: Review;
}
