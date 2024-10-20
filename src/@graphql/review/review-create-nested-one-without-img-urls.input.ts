import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutImgUrlsInput } from './review-create-without-img-urls.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutImgUrlsInput } from './review-create-or-connect-without-img-urls.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedOneWithoutImgUrlsInput {

    @Field(() => ReviewCreateWithoutImgUrlsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutImgUrlsInput)
    create?: ReviewCreateWithoutImgUrlsInput;

    @Field(() => ReviewCreateOrConnectWithoutImgUrlsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutImgUrlsInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutImgUrlsInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'chatId'>;
}
