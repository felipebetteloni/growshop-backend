import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutUserToInput } from './chat-update-without-user-to.input';
import { ChatCreateWithoutUserToInput } from './chat-create-without-user-to.input';

@InputType()
export class ChatUpsertWithWhereUniqueWithoutUserToInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateWithoutUserToInput, {nullable:false})
    @Type(() => ChatUpdateWithoutUserToInput)
    update!: ChatUpdateWithoutUserToInput;

    @Field(() => ChatCreateWithoutUserToInput, {nullable:false})
    @Type(() => ChatCreateWithoutUserToInput)
    create!: ChatCreateWithoutUserToInput;
}
