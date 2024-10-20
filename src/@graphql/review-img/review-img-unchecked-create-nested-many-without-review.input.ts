import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewImgCreateWithoutReviewInput } from './review-img-create-without-review.input';
import { Type } from 'class-transformer';
import { ReviewImgCreateOrConnectWithoutReviewInput } from './review-img-create-or-connect-without-review.input';
import { ReviewImgCreateManyReviewInputEnvelope } from './review-img-create-many-review-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewImgWhereUniqueInput } from './review-img-where-unique.input';

@InputType()
export class ReviewImgUncheckedCreateNestedManyWithoutReviewInput {

    @Field(() => [ReviewImgCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewImgCreateWithoutReviewInput)
    create?: Array<ReviewImgCreateWithoutReviewInput>;

    @Field(() => [ReviewImgCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewImgCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<ReviewImgCreateOrConnectWithoutReviewInput>;

    @Field(() => ReviewImgCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewImgCreateManyReviewInputEnvelope)
    createMany?: ReviewImgCreateManyReviewInputEnvelope;

    @Field(() => [ReviewImgWhereUniqueInput], {nullable:true})
    @Type(() => ReviewImgWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewImgWhereUniqueInput, 'id'>>;
}
