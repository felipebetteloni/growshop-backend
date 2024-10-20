import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChatsFromInput } from './user-create-without-chats-from.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChatsFromInput } from './user-create-or-connect-without-chats-from.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutChatsFromInput {

    @Field(() => UserCreateWithoutChatsFromInput, {nullable:true})
    @Type(() => UserCreateWithoutChatsFromInput)
    create?: UserCreateWithoutChatsFromInput;

    @Field(() => UserCreateOrConnectWithoutChatsFromInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChatsFromInput)
    connectOrCreate?: UserCreateOrConnectWithoutChatsFromInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
