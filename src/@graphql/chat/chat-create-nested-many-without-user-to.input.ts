import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutUserToInput } from './chat-create-without-user-to.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutUserToInput } from './chat-create-or-connect-without-user-to.input';
import { ChatCreateManyUserToInputEnvelope } from './chat-create-many-user-to-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedManyWithoutUserToInput {

    @Field(() => [ChatCreateWithoutUserToInput], {nullable:true})
    @Type(() => ChatCreateWithoutUserToInput)
    create?: Array<ChatCreateWithoutUserToInput>;

    @Field(() => [ChatCreateOrConnectWithoutUserToInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutUserToInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutUserToInput>;

    @Field(() => ChatCreateManyUserToInputEnvelope, {nullable:true})
    @Type(() => ChatCreateManyUserToInputEnvelope)
    createMany?: ChatCreateManyUserToInputEnvelope;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;
}
