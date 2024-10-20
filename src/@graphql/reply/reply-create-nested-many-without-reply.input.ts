import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutReplyInput } from './reply-create-without-reply.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutReplyInput } from './reply-create-or-connect-without-reply.input';
import { ReplyCreateManyReplyInputEnvelope } from './reply-create-many-reply-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyCreateNestedManyWithoutReplyInput {

    @Field(() => [ReplyCreateWithoutReplyInput], {nullable:true})
    @Type(() => ReplyCreateWithoutReplyInput)
    create?: Array<ReplyCreateWithoutReplyInput>;

    @Field(() => [ReplyCreateOrConnectWithoutReplyInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutReplyInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutReplyInput>;

    @Field(() => ReplyCreateManyReplyInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyReplyInputEnvelope)
    createMany?: ReplyCreateManyReplyInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;
}
