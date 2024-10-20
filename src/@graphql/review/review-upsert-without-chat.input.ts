import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUpdateWithoutChatInput } from './review-update-without-chat.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutChatInput } from './review-create-without-chat.input';
import { ReviewWhereInput } from './review-where.input';

@InputType()
export class ReviewUpsertWithoutChatInput {

    @Field(() => ReviewUpdateWithoutChatInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutChatInput)
    update!: ReviewUpdateWithoutChatInput;

    @Field(() => ReviewCreateWithoutChatInput, {nullable:false})
    @Type(() => ReviewCreateWithoutChatInput)
    create!: ReviewCreateWithoutChatInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;
}
