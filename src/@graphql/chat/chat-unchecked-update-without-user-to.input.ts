import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutChatNestedInput } from '../message/message-unchecked-update-many-without-chat-nested.input';
import { ReviewUncheckedUpdateOneWithoutChatNestedInput } from '../review/review-unchecked-update-one-without-chat-nested.input';

@InputType()
export class ChatUncheckedUpdateWithoutUserToInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userFromId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutChatNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput;

    @Field(() => ReviewUncheckedUpdateOneWithoutChatNestedInput, {nullable:true})
    review?: ReviewUncheckedUpdateOneWithoutChatNestedInput;
}
