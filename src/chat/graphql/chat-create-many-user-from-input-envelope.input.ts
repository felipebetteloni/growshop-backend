import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateManyUserFromInput } from './chat-create-many-user-from.input';
import { Type } from 'class-transformer';

@InputType()
export class ChatCreateManyUserFromInputEnvelope {

    @Field(() => [ChatCreateManyUserFromInput], {nullable:false})
    @Type(() => ChatCreateManyUserFromInput)
    data!: Array<ChatCreateManyUserFromInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
