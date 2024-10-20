import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUncheckedCreateNestedOneWithoutChatInput } from '../review/review-unchecked-create-nested-one-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutMessagesInput {

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

    @Field(() => ReviewUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    review?: ReviewUncheckedCreateNestedOneWithoutChatInput;
}
