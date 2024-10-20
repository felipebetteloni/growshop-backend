import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewImgUncheckedCreateNestedManyWithoutReviewInput } from '../review-img/review-img-unchecked-create-nested-many-without-review.input';

@InputType()
export class ReviewUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => ReviewImgUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    imgUrls?: ReviewImgUncheckedCreateNestedManyWithoutReviewInput;
}
