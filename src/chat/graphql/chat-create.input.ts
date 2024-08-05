import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutChatsFromInput } from '../../user/user-create-nested-one-without-chats-from.input';
import { UserCreateNestedOneWithoutChatsToInput } from '../../user/user-create-nested-one-without-chats-to.input';
import { MessageCreateNestedManyWithoutChatInput } from '../../message/message-create-nested-many-without-chat.input';
import { ReviewCreateNestedOneWithoutChatInput } from '../../review/review-create-nested-one-without-chat.input';

@InputType()
export class ChatCreateInput {

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

    @Field(() => MessageCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChatInput;

    @Field(() => ReviewCreateNestedOneWithoutChatInput, {nullable:true})
    review?: ReviewCreateNestedOneWithoutChatInput;
}
