import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutChatsFromInput } from '../../user/user-create-nested-one-without-chats-from.input';
import { UserCreateNestedOneWithoutChatsToInput } from '../../user/user-create-nested-one-without-chats-to.input';
import { ReviewCreateNestedOneWithoutChatInput } from '../../review/review-create-nested-one-without-chat.input';

@InputType()
export class ChatCreateWithoutMessagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => UserCreateNestedOneWithoutChatsFromInput, {nullable:false})
    userFrom!: UserCreateNestedOneWithoutChatsFromInput;

    @Field(() => UserCreateNestedOneWithoutChatsToInput, {nullable:false})
    userTo!: UserCreateNestedOneWithoutChatsToInput;

    @Field(() => ReviewCreateNestedOneWithoutChatInput, {nullable:true})
    review?: ReviewCreateNestedOneWithoutChatInput;
}
