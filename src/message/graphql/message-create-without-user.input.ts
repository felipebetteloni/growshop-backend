import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateNestedOneWithoutMessagesInput } from '../chat/chat-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    imgUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;

    @Field(() => ChatCreateNestedOneWithoutMessagesInput, {nullable:false})
    chat!: ChatCreateNestedOneWithoutMessagesInput;
}
