import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewImgCreateInput } from './review-img-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewImgArgs {

    @Field(() => ReviewImgCreateInput, {nullable:false})
    @Type(() => ReviewImgCreateInput)
    data!: ReviewImgCreateInput;
}
