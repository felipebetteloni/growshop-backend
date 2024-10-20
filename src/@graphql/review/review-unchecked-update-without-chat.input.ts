import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReviewImgUncheckedUpdateManyWithoutReviewNestedInput } from '../review-img/review-img-unchecked-update-many-without-review-nested.input';

@InputType()
export class ReviewUncheckedUpdateWithoutChatInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ReviewImgUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    imgUrls?: ReviewImgUncheckedUpdateManyWithoutReviewNestedInput;
}
