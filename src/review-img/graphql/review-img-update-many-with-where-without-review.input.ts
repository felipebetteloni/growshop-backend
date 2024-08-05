import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewImgScalarWhereInput } from './review-img-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewImgUpdateManyMutationInput } from './review-img-update-many-mutation.input';

@InputType()
export class ReviewImgUpdateManyWithWhereWithoutReviewInput {

    @Field(() => ReviewImgScalarWhereInput, {nullable:false})
    @Type(() => ReviewImgScalarWhereInput)
    where!: ReviewImgScalarWhereInput;

    @Field(() => ReviewImgUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewImgUpdateManyMutationInput)
    data!: ReviewImgUpdateManyMutationInput;
}
