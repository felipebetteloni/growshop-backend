import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessageCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    imgUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
}
