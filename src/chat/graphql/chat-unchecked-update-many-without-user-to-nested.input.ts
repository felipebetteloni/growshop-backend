import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutUserToInput } from './chat-create-without-user-to.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutUserToInput } from './chat-create-or-connect-without-user-to.input';
import { ChatUpsertWithWhereUniqueWithoutUserToInput } from './chat-upsert-with-where-unique-without-user-to.input';
import { ChatCreateManyUserToInputEnvelope } from './chat-create-many-user-to-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateWithWhereUniqueWithoutUserToInput } from './chat-update-with-where-unique-without-user-to.input';
import { ChatUpdateManyWithWhereWithoutUserToInput } from './chat-update-many-with-where-without-user-to.input';
import { ChatScalarWhereInput } from './chat-scalar-where.input';

@InputType()
export class ChatUncheckedUpdateManyWithoutUserToNestedInput {

    @Field(() => [ChatCreateWithoutUserToInput], {nullable:true})
    @Type(() => ChatCreateWithoutUserToInput)
    create?: Array<ChatCreateWithoutUserToInput>;

    @Field(() => [ChatCreateOrConnectWithoutUserToInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutUserToInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutUserToInput>;

    @Field(() => [ChatUpsertWithWhereUniqueWithoutUserToInput], {nullable:true})
    @Type(() => ChatUpsertWithWhereUniqueWithoutUserToInput)
    upsert?: Array<ChatUpsertWithWhereUniqueWithoutUserToInput>;

    @Field(() => ChatCreateManyUserToInputEnvelope, {nullable:true})
    @Type(() => ChatCreateManyUserToInputEnvelope)
    createMany?: ChatCreateManyUserToInputEnvelope;

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

    @Field(() => [ChatUpdateWithWhereUniqueWithoutUserToInput], {nullable:true})
    @Type(() => ChatUpdateWithWhereUniqueWithoutUserToInput)
    update?: Array<ChatUpdateWithWhereUniqueWithoutUserToInput>;

    @Field(() => [ChatUpdateManyWithWhereWithoutUserToInput], {nullable:true})
    @Type(() => ChatUpdateManyWithWhereWithoutUserToInput)
    updateMany?: Array<ChatUpdateManyWithWhereWithoutUserToInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    @Type(() => ChatScalarWhereInput)
    deleteMany?: Array<ChatScalarWhereInput>;
}
