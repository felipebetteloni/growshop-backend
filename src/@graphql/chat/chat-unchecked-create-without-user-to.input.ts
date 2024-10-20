import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChatInput } from '../message/message-unchecked-create-nested-many-without-chat.input';
import { ReviewUncheckedCreateNestedOneWithoutChatInput } from '../review/review-unchecked-create-nested-one-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutUserToInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userFromId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput;

    @Field(() => ReviewUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    review?: ReviewUncheckedCreateNestedOneWithoutChatInput;
}
