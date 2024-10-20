import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutChatsToInput } from './user-update-without-chats-to.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutChatsToInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutChatsToInput, {nullable:false})
    @Type(() => UserUpdateWithoutChatsToInput)
    data!: UserUpdateWithoutChatsToInput;
}
