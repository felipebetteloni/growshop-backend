import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutReviewInput } from './chat-update-without-review.input';

@InputType()
export class ChatUpdateToOneWithWhereWithoutReviewInput {

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;

    @Field(() => ChatUpdateWithoutReviewInput, {nullable:false})
    @Type(() => ChatUpdateWithoutReviewInput)
    data!: ChatUpdateWithoutReviewInput;
}
