import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutChatsFromInput } from '../../user/user-create-nested-one-without-chats-from.input';
import { MessageCreateNestedManyWithoutChatInput } from '../../message/message-create-nested-many-without-chat.input';
import { ReviewCreateNestedOneWithoutChatInput } from '../../review/review-create-nested-one-without-chat.input';

@InputType()
export class ChatCreateWithoutUserToInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => UserCreateNestedOneWithoutChatsFromInput, {nullable:false})
    userFrom!: UserCreateNestedOneWithoutChatsFromInput;

    @Field(() => MessageCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChatInput;

    @Field(() => ReviewCreateNestedOneWithoutChatInput, {nullable:true})
    review?: ReviewCreateNestedOneWithoutChatInput;
}
