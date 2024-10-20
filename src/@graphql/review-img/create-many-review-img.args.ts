import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewImgCreateManyInput } from './review-img-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewImgArgs {

    @Field(() => [ReviewImgCreateManyInput], {nullable:false})
    @Type(() => ReviewImgCreateManyInput)
    data!: Array<ReviewImgCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
