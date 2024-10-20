import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutChatInput } from './review-create-without-chat.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutChatInput } from './review-create-or-connect-without-chat.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedOneWithoutChatInput {

    @Field(() => ReviewCreateWithoutChatInput, {nullable:true})
    @Type(() => ReviewCreateWithoutChatInput)
    create?: ReviewCreateWithoutChatInput;

    @Field(() => ReviewCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutChatInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutChatInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'chatId'>;
}
