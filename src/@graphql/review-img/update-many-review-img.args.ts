import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewImgUpdateManyMutationInput } from './review-img-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewImgWhereInput } from './review-img-where.input';

@ArgsType()
export class UpdateManyReviewImgArgs {

    @Field(() => ReviewImgUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewImgUpdateManyMutationInput)
    data!: ReviewImgUpdateManyMutationInput;

    @Field(() => ReviewImgWhereInput, {nullable:true})
    @Type(() => ReviewImgWhereInput)
    where?: ReviewImgWhereInput;
}
