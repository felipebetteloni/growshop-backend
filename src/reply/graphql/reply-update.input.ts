import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CommentUpdateOneRequiredWithoutRepliesNestedInput } from '../comment/comment-update-one-required-without-replies-nested.input';
import { ReplyUpdateOneWithoutRepliesNestedInput } from './reply-update-one-without-replies-nested.input';
import { UserUpdateOneRequiredWithoutRepliesNestedInput } from '../user/user-update-one-required-without-replies-nested.input';
import { ReplyUpdateManyWithoutReplyNestedInput } from './reply-update-many-without-reply-nested.input';

@InputType()
export class ReplyUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => CommentUpdateOneRequiredWithoutRepliesNestedInput, {nullable:true})
    comment?: CommentUpdateOneRequiredWithoutRepliesNestedInput;

    @Field(() => ReplyUpdateOneWithoutRepliesNestedInput, {nullable:true})
    reply?: ReplyUpdateOneWithoutRepliesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutRepliesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRepliesNestedInput;

    @Field(() => ReplyUpdateManyWithoutReplyNestedInput, {nullable:true})
    replies?: ReplyUpdateManyWithoutReplyNestedInput;
}
