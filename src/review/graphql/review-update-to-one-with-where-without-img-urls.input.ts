import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutImgUrlsInput } from './review-update-without-img-urls.input';

@InputType()
export class ReviewUpdateToOneWithWhereWithoutImgUrlsInput {

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;

    @Field(() => ReviewUpdateWithoutImgUrlsInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutImgUrlsInput)
    data!: ReviewUpdateWithoutImgUrlsInput;
}
