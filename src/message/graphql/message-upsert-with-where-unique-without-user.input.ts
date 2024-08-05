import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutUserInput } from './message-update-without-user.input';
import { MessageCreateWithoutUserInput } from './message-create-without-user.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageUpdateWithoutUserInput, {nullable:false})
    @Type(() => MessageUpdateWithoutUserInput)
    update!: MessageUpdateWithoutUserInput;

    @Field(() => MessageCreateWithoutUserInput, {nullable:false})
    @Type(() => MessageCreateWithoutUserInput)
    create!: MessageCreateWithoutUserInput;
}
