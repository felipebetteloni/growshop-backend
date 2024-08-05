import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutChatsFromNestedInput } from '../../user/user-update-one-required-without-chats-from-nested.input';
import { MessageUpdateManyWithoutChatNestedInput } from '../../message/message-update-many-without-chat-nested.input';
import { ReviewUpdateOneWithoutChatNestedInput } from '../../review/review-update-one-without-chat-nested.input';

@InputType()
export class ChatUpdateWithoutUserToInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutChatsFromNestedInput, {nullable:true})
    userFrom?: UserUpdateOneRequiredWithoutChatsFromNestedInput;

    @Field(() => MessageUpdateManyWithoutChatNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChatNestedInput;

    @Field(() => ReviewUpdateOneWithoutChatNestedInput, {nullable:true})
    review?: ReviewUpdateOneWithoutChatNestedInput;
}
