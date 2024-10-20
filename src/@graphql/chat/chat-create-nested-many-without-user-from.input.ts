import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutUserFromInput } from './chat-create-without-user-from.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutUserFromInput } from './chat-create-or-connect-without-user-from.input';
import { ChatCreateManyUserFromInputEnvelope } from './chat-create-many-user-from-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedManyWithoutUserFromInput {

    @Field(() => [ChatCreateWithoutUserFromInput], {nullable:true})
    @Type(() => ChatCreateWithoutUserFromInput)
    create?: Array<ChatCreateWithoutUserFromInput>;

    @Field(() => [ChatCreateOrConnectWithoutUserFromInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutUserFromInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutUserFromInput>;

    @Field(() => ChatCreateManyUserFromInputEnvelope, {nullable:true})
    @Type(() => ChatCreateManyUserFromInputEnvelope)
    createMany?: ChatCreateManyUserFromInputEnvelope;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;
}
