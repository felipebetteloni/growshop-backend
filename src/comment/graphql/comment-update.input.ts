import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../../user/user-update-one-required-without-comments-nested.input';
import { ProductUpdateOneRequiredWithoutCommentsNestedInput } from '../../product/product-update-one-required-without-comments-nested.input';
import { ReplyUpdateManyWithoutCommentNestedInput } from '../../reply/reply-update-many-without-comment-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => ReplyUpdateManyWithoutCommentNestedInput, {nullable:true})
    replies?: ReplyUpdateManyWithoutCommentNestedInput;
}
