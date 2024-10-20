import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutUserToInput } from './chat-update-without-user-to.input';

@InputType()
export class ChatUpdateWithWhereUniqueWithoutUserToInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateWithoutUserToInput, {nullable:false})
    @Type(() => ChatUpdateWithoutUserToInput)
    data!: ChatUpdateWithoutUserToInput;
}
