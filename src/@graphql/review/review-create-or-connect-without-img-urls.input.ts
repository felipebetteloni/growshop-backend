import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutImgUrlsInput } from './review-create-without-img-urls.input';

@InputType()
export class ReviewCreateOrConnectWithoutImgUrlsInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'chatId'>;

    @Field(() => ReviewCreateWithoutImgUrlsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutImgUrlsInput)
    create!: ReviewCreateWithoutImgUrlsInput;
}
