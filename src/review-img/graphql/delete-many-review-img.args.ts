import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewImgWhereInput } from './review-img-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewImgArgs {

    @Field(() => ReviewImgWhereInput, {nullable:true})
    @Type(() => ReviewImgWhereInput)
    where?: ReviewImgWhereInput;
}
