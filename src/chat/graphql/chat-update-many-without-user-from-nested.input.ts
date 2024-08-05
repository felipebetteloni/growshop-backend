import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutUserFromInput } from './chat-create-without-user-from.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutUserFromInput } from './chat-create-or-connect-without-user-from.input';
import { ChatUpsertWithWhereUniqueWithoutUserFromInput } from './chat-upsert-with-where-unique-without-user-from.input';
import { ChatCreateManyUserFromInputEnvelope } from './chat-create-many-user-from-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateWithWhereUniqueWithoutUserFromInput } from './chat-update-with-where-unique-without-user-from.input';
import { ChatUpdateManyWithWhereWithoutUserFromInput } from './chat-update-many-with-where-without-user-from.input';
import { ChatScalarWhereInput } from './chat-scalar-where.input';

@InputType()
export class ChatUpdateManyWithoutUserFromNestedInput {

    @Field(() => [ChatCreateWithoutUserFromInput], {nullable:true})
    @Type(() => ChatCreateWithoutUserFromInput)
    create?: Array<ChatCreateWithoutUserFromInput>;

    @Field(() => [ChatCreateOrConnectWithoutUserFromInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutUserFromInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutUserFromInput>;

    @Field(() => [ChatUpsertWithWhereUniqueWithoutUserFromInput], {nullable:true})
    @Type(() => ChatUpsertWithWhereUniqueWithoutUserFromInput)
    upsert?: Array<ChatUpsertWithWhereUniqueWithoutUserFromInput>;

    @Field(() => ChatCreateManyUserFromInputEnvelope, {nullable:true})
    @Type(() => ChatCreateManyUserFromInputEnvelope)
    createMany?: ChatCreateManyUserFromInputEnvelope;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatUpdateWithWhereUniqueWithoutUserFromInput], {nullable:true})
    @Type(() => ChatUpdateWithWhereUniqueWithoutUserFromInput)
    update?: Array<ChatUpdateWithWhereUniqueWithoutUserFromInput>;

    @Field(() => [ChatUpdateManyWithWhereWithoutUserFromInput], {nullable:true})
    @Type(() => ChatUpdateManyWithWhereWithoutUserFromInput)
    updateMany?: Array<ChatUpdateManyWithWhereWithoutUserFromInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    @Type(() => ChatScalarWhereInput)
    deleteMany?: Array<ChatScalarWhereInput>;
}
