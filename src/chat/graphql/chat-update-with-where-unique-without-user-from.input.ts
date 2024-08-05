import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutUserFromInput } from './chat-update-without-user-from.input';

@InputType()
export class ChatUpdateWithWhereUniqueWithoutUserFromInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateWithoutUserFromInput, {nullable:false})
    @Type(() => ChatUpdateWithoutUserFromInput)
    data!: ChatUpdateWithoutUserFromInput;
}
