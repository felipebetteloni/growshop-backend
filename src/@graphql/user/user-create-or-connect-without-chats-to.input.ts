import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChatsToInput } from './user-create-without-chats-to.input';

@InputType()
export class UserCreateOrConnectWithoutChatsToInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutChatsToInput, {nullable:false})
    @Type(() => UserCreateWithoutChatsToInput)
    create!: UserCreateWithoutChatsToInput;
}
