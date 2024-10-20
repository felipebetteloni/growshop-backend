import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewImgUncheckedCreateNestedManyWithoutReviewInput } from '../review-img/review-img-unchecked-create-nested-many-without-review.input';

@InputType()
export class ReviewUncheckedCreateWithoutChatInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ReviewImgUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    imgUrls?: ReviewImgUncheckedCreateNestedManyWithoutReviewInput;
}
