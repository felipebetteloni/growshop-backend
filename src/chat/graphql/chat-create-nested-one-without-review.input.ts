import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutReviewInput } from './chat-create-without-review.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutReviewInput } from './chat-create-or-connect-without-review.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedOneWithoutReviewInput {

    @Field(() => ChatCreateWithoutReviewInput, {nullable:true})
    @Type(() => ChatCreateWithoutReviewInput)
    create?: ChatCreateWithoutReviewInput;

    @Field(() => ChatCreateOrConnectWithoutReviewInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutReviewInput)
    connectOrCreate?: ChatCreateOrConnectWithoutReviewInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
