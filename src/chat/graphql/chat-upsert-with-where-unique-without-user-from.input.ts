import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutUserFromInput } from './chat-update-without-user-from.input';
import { ChatCreateWithoutUserFromInput } from './chat-create-without-user-from.input';

@InputType()
export class ChatUpsertWithWhereUniqueWithoutUserFromInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateWithoutUserFromInput, {nullable:false})
    @Type(() => ChatUpdateWithoutUserFromInput)
    update!: ChatUpdateWithoutUserFromInput;

    @Field(() => ChatCreateWithoutUserFromInput, {nullable:false})
    @Type(() => ChatCreateWithoutUserFromInput)
    create!: ChatCreateWithoutUserFromInput;
}
