import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewImgUpdateInput } from './review-img-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReviewImgWhereUniqueInput } from './review-img-where-unique.input';

@ArgsType()
export class UpdateOneReviewImgArgs {

    @Field(() => ReviewImgUpdateInput, {nullable:false})
    @Type(() => ReviewImgUpdateInput)
    data!: ReviewImgUpdateInput;

    @Field(() => ReviewImgWhereUniqueInput, {nullable:false})
    @Type(() => ReviewImgWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewImgWhereUniqueInput, 'id'>;
}
