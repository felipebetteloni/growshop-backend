import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutChatInput } from './review-update-without-chat.input';

@InputType()
export class ReviewUpdateToOneWithWhereWithoutChatInput {

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;

    @Field(() => ReviewUpdateWithoutChatInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutChatInput)
    data!: ReviewUpdateWithoutChatInput;
}
