import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewImgWhereInput } from './review-img-where.input';
import { Type } from 'class-transformer';
import { ReviewImgOrderByWithRelationInput } from './review-img-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewImgWhereUniqueInput } from './review-img-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewImgScalarFieldEnum } from './review-img-scalar-field.enum';

@ArgsType()
export class FindManyReviewImgArgs {

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

    @Field(() => [ReviewImgScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewImgScalarFieldEnum>;
}
