import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewImgCreateManyReviewInput } from './review-img-create-many-review.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewImgCreateManyReviewInputEnvelope {

    @Field(() => [ReviewImgCreateManyReviewInput], {nullable:false})
    @Type(() => ReviewImgCreateManyReviewInput)
    data!: Array<ReviewImgCreateManyReviewInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
