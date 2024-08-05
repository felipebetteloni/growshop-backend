import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutChatsFromInput } from './user-update-without-chats-from.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutChatsFromInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutChatsFromInput, {nullable:false})
    @Type(() => UserUpdateWithoutChatsFromInput)
    data!: UserUpdateWithoutChatsFromInput;
}
