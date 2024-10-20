import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateManyUserToInput } from './chat-create-many-user-to.input';
import { Type } from 'class-transformer';

@InputType()
export class ChatCreateManyUserToInputEnvelope {

    @Field(() => [ChatCreateManyUserToInput], {nullable:false})
    @Type(() => ChatCreateManyUserToInput)
    data!: Array<ChatCreateManyUserToInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
