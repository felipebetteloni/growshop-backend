import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutChatInput } from './review-create-without-chat.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutChatInput } from './review-create-or-connect-without-chat.input';
import { ReviewUpsertWithoutChatInput } from './review-upsert-without-chat.input';
import { ReviewWhereInput } from './review-where.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateToOneWithWhereWithoutChatInput } from './review-update-to-one-with-where-without-chat.input';

@InputType()
export class ReviewUncheckedUpdateOneWithoutChatNestedInput {

    @Field(() => ReviewCreateWithoutChatInput, {nullable:true})
    @Type(() => ReviewCreateWithoutChatInput)
    create?: ReviewCreateWithoutChatInput;

    @Field(() => ReviewCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutChatInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutChatInput;

    @Field(() => ReviewUpsertWithoutChatInput, {nullable:true})
    @Type(() => ReviewUpsertWithoutChatInput)
    upsert?: ReviewUpsertWithoutChatInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    disconnect?: ReviewWhereInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    delete?: ReviewWhereInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'chatId'>;

    @Field(() => ReviewUpdateToOneWithWhereWithoutChatInput, {nullable:true})
    @Type(() => ReviewUpdateToOneWithWhereWithoutChatInput)
    update?: ReviewUpdateToOneWithWhereWithoutChatInput;
}
