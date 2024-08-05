import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewImgWhereUniqueInput } from './review-img-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewImgCreateInput } from './review-img-create.input';
import { ReviewImgUpdateInput } from './review-img-update.input';

@ArgsType()
export class UpsertOneReviewImgArgs {

    @Field(() => ReviewImgWhereUniqueInput, {nullable:false})
    @Type(() => ReviewImgWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewImgWhereUniqueInput, 'id'>;

    @Field(() => ReviewImgCreateInput, {nullable:false})
    @Type(() => ReviewImgCreateInput)
    create!: ReviewImgCreateInput;

    @Field(() => ReviewImgUpdateInput, {nullable:false})
    @Type(() => ReviewImgUpdateInput)
    update!: ReviewImgUpdateInput;
}
