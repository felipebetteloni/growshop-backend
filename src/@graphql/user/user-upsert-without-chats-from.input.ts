import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutChatsFromInput } from './user-update-without-chats-from.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChatsFromInput } from './user-create-without-chats-from.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutChatsFromInput {

    @Field(() => UserUpdateWithoutChatsFromInput, {nullable:false})
    @Type(() => UserUpdateWithoutChatsFromInput)
    update!: UserUpdateWithoutChatsFromInput;

    @Field(() => UserCreateWithoutChatsFromInput, {nullable:false})
    @Type(() => UserCreateWithoutChatsFromInput)
    create!: UserCreateWithoutChatsFromInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
