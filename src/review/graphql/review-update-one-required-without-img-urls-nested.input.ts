import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutImgUrlsInput } from './review-create-without-img-urls.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutImgUrlsInput } from './review-create-or-connect-without-img-urls.input';
import { ReviewUpsertWithoutImgUrlsInput } from './review-upsert-without-img-urls.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateToOneWithWhereWithoutImgUrlsInput } from './review-update-to-one-with-where-without-img-urls.input';

@InputType()
export class ReviewUpdateOneRequiredWithoutImgUrlsNestedInput {

    @Field(() => ReviewCreateWithoutImgUrlsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutImgUrlsInput)
    create?: ReviewCreateWithoutImgUrlsInput;

    @Field(() => ReviewCreateOrConnectWithoutImgUrlsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutImgUrlsInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutImgUrlsInput;

    @Field(() => ReviewUpsertWithoutImgUrlsInput, {nullable:true})
    @Type(() => ReviewUpsertWithoutImgUrlsInput)
    upsert?: ReviewUpsertWithoutImgUrlsInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'chatId'>;

    @Field(() => ReviewUpdateToOneWithWhereWithoutImgUrlsInput, {nullable:true})
    @Type(() => ReviewUpdateToOneWithWhereWithoutImgUrlsInput)
    update?: ReviewUpdateToOneWithWhereWithoutImgUrlsInput;
}
