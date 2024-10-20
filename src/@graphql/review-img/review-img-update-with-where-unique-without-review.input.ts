import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewImgWhereUniqueInput } from './review-img-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewImgUpdateWithoutReviewInput } from './review-img-update-without-review.input';

@InputType()
export class ReviewImgUpdateWithWhereUniqueWithoutReviewInput {

    @Field(() => ReviewImgWhereUniqueInput, {nullable:false})
    @Type(() => ReviewImgWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewImgWhereUniqueInput, 'id'>;

    @Field(() => ReviewImgUpdateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewImgUpdateWithoutReviewInput)
    data!: ReviewImgUpdateWithoutReviewInput;
}
