import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutChatsToNestedInput } from '../../user/user-update-one-required-without-chats-to-nested.input';
import { MessageUpdateManyWithoutChatNestedInput } from '../../message/message-update-many-without-chat-nested.input';
import { ReviewUpdateOneWithoutChatNestedInput } from '../../review/review-update-one-without-chat-nested.input';

@InputType()
export class ChatUpdateWithoutUserFromInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutChatsToNestedInput, {nullable:true})
    userTo?: UserUpdateOneRequiredWithoutChatsToNestedInput;

    @Field(() => MessageUpdateManyWithoutChatNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChatNestedInput;

    @Field(() => ReviewUpdateOneWithoutChatNestedInput, {nullable:true})
    review?: ReviewUpdateOneWithoutChatNestedInput;
}
