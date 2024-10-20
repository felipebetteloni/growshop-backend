import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutUserInput } from './message-update-without-user.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageUpdateWithoutUserInput, {nullable:false})
    @Type(() => MessageUpdateWithoutUserInput)
    data!: MessageUpdateWithoutUserInput;
}
