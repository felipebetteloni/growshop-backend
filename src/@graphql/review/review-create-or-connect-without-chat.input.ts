import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutChatInput } from './review-create-without-chat.input';

@InputType()
export class ReviewCreateOrConnectWithoutChatInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'chatId'>;

    @Field(() => ReviewCreateWithoutChatInput, {nullable:false})
    @Type(() => ReviewCreateWithoutChatInput)
    create!: ReviewCreateWithoutChatInput;
}
