import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutUserFromInput } from './chat-create-without-user-from.input';

@InputType()
export class ChatCreateOrConnectWithoutUserFromInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatCreateWithoutUserFromInput, {nullable:false})
    @Type(() => ChatCreateWithoutUserFromInput)
    create!: ChatCreateWithoutUserFromInput;
}
