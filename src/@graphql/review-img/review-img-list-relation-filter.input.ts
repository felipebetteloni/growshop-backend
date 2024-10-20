import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewImgWhereInput } from './review-img-where.input';

@InputType()
export class ReviewImgListRelationFilter {

    @Field(() => ReviewImgWhereInput, {nullable:true})
    every?: ReviewImgWhereInput;

    @Field(() => ReviewImgWhereInput, {nullable:true})
    some?: ReviewImgWhereInput;

    @Field(() => ReviewImgWhereInput, {nullable:true})
    none?: ReviewImgWhereInput;
}
