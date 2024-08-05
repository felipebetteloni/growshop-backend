import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUpdateWithoutImgUrlsInput } from './review-update-without-img-urls.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutImgUrlsInput } from './review-create-without-img-urls.input';
import { ReviewWhereInput } from './review-where.input';

@InputType()
export class ReviewUpsertWithoutImgUrlsInput {

    @Field(() => ReviewUpdateWithoutImgUrlsInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutImgUrlsInput)
    update!: ReviewUpdateWithoutImgUrlsInput;

    @Field(() => ReviewCreateWithoutImgUrlsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutImgUrlsInput)
    create!: ReviewCreateWithoutImgUrlsInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;
}
