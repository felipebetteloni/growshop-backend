import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChatsFromInput } from './user-create-without-chats-from.input';

@InputType()
export class UserCreateOrConnectWithoutChatsFromInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutChatsFromInput, {nullable:false})
    @Type(() => UserCreateWithoutChatsFromInput)
    create!: UserCreateWithoutChatsFromInput;
}
