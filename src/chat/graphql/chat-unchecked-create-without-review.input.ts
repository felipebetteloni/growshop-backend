import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChatInput } from '../../message/message-unchecked-create-nested-many-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutReviewInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userFromId!: string;

    @Field(() => String, {nullable:false})
    userToId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput;
}
