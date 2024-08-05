import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChatsToInput } from './user-create-without-chats-to.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChatsToInput } from './user-create-or-connect-without-chats-to.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutChatsToInput {

    @Field(() => UserCreateWithoutChatsToInput, {nullable:true})
    @Type(() => UserCreateWithoutChatsToInput)
    create?: UserCreateWithoutChatsToInput;

    @Field(() => UserCreateOrConnectWithoutChatsToInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChatsToInput)
    connectOrCreate?: UserCreateOrConnectWithoutChatsToInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
