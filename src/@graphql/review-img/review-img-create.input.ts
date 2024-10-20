import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateNestedOneWithoutImgUrlsInput } from '../review/review-create-nested-one-without-img-urls.input';

@InputType()
export class ReviewImgCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    imgUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ReviewCreateNestedOneWithoutImgUrlsInput, {nullable:false})
    review!: ReviewCreateNestedOneWithoutImgUrlsInput;
}
