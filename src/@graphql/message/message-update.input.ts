import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutMessagesNestedInput } from '../user/user-update-one-required-without-messages-nested.input';
import { ChatUpdateOneRequiredWithoutMessagesNestedInput } from '../chat/chat-update-one-required-without-messages-nested.input';

@InputType()
export class MessageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imgUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutMessagesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput;

    @Field(() => ChatUpdateOneRequiredWithoutMessagesNestedInput, {nullable:true})
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;
}
