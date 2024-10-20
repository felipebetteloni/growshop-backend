import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewImgCreateWithoutReviewInput } from './review-img-create-without-review.input';
import { Type } from 'class-transformer';
import { ReviewImgCreateOrConnectWithoutReviewInput } from './review-img-create-or-connect-without-review.input';
import { ReviewImgUpsertWithWhereUniqueWithoutReviewInput } from './review-img-upsert-with-where-unique-without-review.input';
import { ReviewImgCreateManyReviewInputEnvelope } from './review-img-create-many-review-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewImgWhereUniqueInput } from './review-img-where-unique.input';
import { ReviewImgUpdateWithWhereUniqueWithoutReviewInput } from './review-img-update-with-where-unique-without-review.input';
import { ReviewImgUpdateManyWithWhereWithoutReviewInput } from './review-img-update-many-with-where-without-review.input';
import { ReviewImgScalarWhereInput } from './review-img-scalar-where.input';

@InputType()
export class ReviewImgUpdateManyWithoutReviewNestedInput {

    @Field(() => [ReviewImgCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewImgCreateWithoutReviewInput)
    create?: Array<ReviewImgCreateWithoutReviewInput>;

    @Field(() => [ReviewImgCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewImgCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<ReviewImgCreateOrConnectWithoutReviewInput>;

    @Field(() => [ReviewImgUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewImgUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<ReviewImgUpsertWithWhereUniqueWithoutReviewInput>;

    @Field(() => ReviewImgCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewImgCreateManyReviewInputEnvelope)
    createMany?: ReviewImgCreateManyReviewInputEnvelope;

    @Field(() => [ReviewImgWhereUniqueInput], {nullable:true})
    @Type(() => ReviewImgWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewImgWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewImgWhereUniqueInput], {nullable:true})
    @Type(() => ReviewImgWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewImgWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewImgWhereUniqueInput], {nullable:true})
    @Type(() => ReviewImgWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewImgWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewImgWhereUniqueInput], {nullable:true})
    @Type(() => ReviewImgWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewImgWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewImgUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewImgUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<ReviewImgUpdateWithWhereUniqueWithoutReviewInput>;

    @Field(() => [ReviewImgUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => ReviewImgUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<ReviewImgUpdateManyWithWhereWithoutReviewInput>;

    @Field(() => [ReviewImgScalarWhereInput], {nullable:true})
    @Type(() => ReviewImgScalarWhereInput)
    deleteMany?: Array<ReviewImgScalarWhereInput>;
}
