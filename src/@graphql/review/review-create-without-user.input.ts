import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateNestedOneWithoutReviewInput } from '../chat/chat-create-nested-one-without-review.input';
import { ReviewImgCreateNestedManyWithoutReviewInput } from '../review-img/review-img-create-nested-many-without-review.input';

@InputType()
export class ReviewCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ChatCreateNestedOneWithoutReviewInput, {nullable:false})
    chat!: ChatCreateNestedOneWithoutReviewInput;

    @Field(() => ReviewImgCreateNestedManyWithoutReviewInput, {nullable:true})
    imgUrls?: ReviewImgCreateNestedManyWithoutReviewInput;
}
