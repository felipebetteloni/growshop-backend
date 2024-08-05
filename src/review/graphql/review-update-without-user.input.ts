import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChatUpdateOneRequiredWithoutReviewNestedInput } from '../chat/chat-update-one-required-without-review-nested.input';
import { ReviewImgUpdateManyWithoutReviewNestedInput } from '../review-img/review-img-update-many-without-review-nested.input';

@InputType()
export class ReviewUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ChatUpdateOneRequiredWithoutReviewNestedInput, {nullable:true})
    chat?: ChatUpdateOneRequiredWithoutReviewNestedInput;

    @Field(() => ReviewImgUpdateManyWithoutReviewNestedInput, {nullable:true})
    imgUrls?: ReviewImgUpdateManyWithoutReviewNestedInput;
}
