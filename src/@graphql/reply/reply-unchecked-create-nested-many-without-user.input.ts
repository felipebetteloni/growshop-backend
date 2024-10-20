import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutUserInput } from './reply-create-without-user.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutUserInput } from './reply-create-or-connect-without-user.input';
import { ReplyCreateManyUserInputEnvelope } from './reply-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ReplyCreateWithoutUserInput], {nullable:true})
    @Type(() => ReplyCreateWithoutUserInput)
    create?: Array<ReplyCreateWithoutUserInput>;

    @Field(() => [ReplyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutUserInput>;

    @Field(() => ReplyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyUserInputEnvelope)
    createMany?: ReplyCreateManyUserInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;
}
