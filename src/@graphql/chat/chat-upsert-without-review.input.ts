import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatUpdateWithoutReviewInput } from './chat-update-without-review.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutReviewInput } from './chat-create-without-review.input';
import { ChatWhereInput } from './chat-where.input';

@InputType()
export class ChatUpsertWithoutReviewInput {

    @Field(() => ChatUpdateWithoutReviewInput, {nullable:false})
    @Type(() => ChatUpdateWithoutReviewInput)
    update!: ChatUpdateWithoutReviewInput;

    @Field(() => ChatCreateWithoutReviewInput, {nullable:false})
    @Type(() => ChatCreateWithoutReviewInput)
    create!: ChatCreateWithoutReviewInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;
}
