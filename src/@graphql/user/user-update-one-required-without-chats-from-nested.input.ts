import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChatsFromInput } from './user-create-without-chats-from.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChatsFromInput } from './user-create-or-connect-without-chats-from.input';
import { UserUpsertWithoutChatsFromInput } from './user-upsert-without-chats-from.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutChatsFromInput } from './user-update-to-one-with-where-without-chats-from.input';

@InputType()
export class UserUpdateOneRequiredWithoutChatsFromNestedInput {

    @Field(() => UserCreateWithoutChatsFromInput, {nullable:true})
    @Type(() => UserCreateWithoutChatsFromInput)
    create?: UserCreateWithoutChatsFromInput;

    @Field(() => UserCreateOrConnectWithoutChatsFromInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChatsFromInput)
    connectOrCreate?: UserCreateOrConnectWithoutChatsFromInput;

    @Field(() => UserUpsertWithoutChatsFromInput, {nullable:true})
    @Type(() => UserUpsertWithoutChatsFromInput)
    upsert?: UserUpsertWithoutChatsFromInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutChatsFromInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutChatsFromInput)
    update?: UserUpdateToOneWithWhereWithoutChatsFromInput;
}
