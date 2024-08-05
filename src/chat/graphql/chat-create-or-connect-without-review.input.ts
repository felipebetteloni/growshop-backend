import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutReviewInput } from './chat-create-without-review.input';

@InputType()
export class ChatCreateOrConnectWithoutReviewInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatCreateWithoutReviewInput, {nullable:false})
    @Type(() => ChatCreateWithoutReviewInput)
    create!: ChatCreateWithoutReviewInput;
}
