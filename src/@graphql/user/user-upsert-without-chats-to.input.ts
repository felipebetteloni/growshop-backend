import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutChatsToInput } from './user-update-without-chats-to.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChatsToInput } from './user-create-without-chats-to.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutChatsToInput {

    @Field(() => UserUpdateWithoutChatsToInput, {nullable:false})
    @Type(() => UserUpdateWithoutChatsToInput)
    update!: UserUpdateWithoutChatsToInput;

    @Field(() => UserCreateWithoutChatsToInput, {nullable:false})
    @Type(() => UserCreateWithoutChatsToInput)
    create!: UserCreateWithoutChatsToInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
