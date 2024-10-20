import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReviewsInput } from '../user/user-create-nested-one-without-reviews.input';
import { ChatCreateNestedOneWithoutReviewInput } from '../chat/chat-create-nested-one-without-review.input';

@InputType()
export class ReviewCreateWithoutImgUrlsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReviewsInput;

    @Field(() => ChatCreateNestedOneWithoutReviewInput, {nullable:false})
    chat!: ChatCreateNestedOneWithoutReviewInput;
}
