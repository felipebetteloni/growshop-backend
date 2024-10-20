import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutReplyInput } from './reply-create-without-reply.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutReplyInput } from './reply-create-or-connect-without-reply.input';
import { ReplyUpsertWithWhereUniqueWithoutReplyInput } from './reply-upsert-with-where-unique-without-reply.input';
import { ReplyCreateManyReplyInputEnvelope } from './reply-create-many-reply-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithWhereUniqueWithoutReplyInput } from './reply-update-with-where-unique-without-reply.input';
import { ReplyUpdateManyWithWhereWithoutReplyInput } from './reply-update-many-with-where-without-reply.input';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';

@InputType()
export class ReplyUpdateManyWithoutReplyNestedInput {

    @Field(() => [ReplyCreateWithoutReplyInput], {nullable:true})
    @Type(() => ReplyCreateWithoutReplyInput)
    create?: Array<ReplyCreateWithoutReplyInput>;

    @Field(() => [ReplyCreateOrConnectWithoutReplyInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutReplyInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutReplyInput>;

    @Field(() => [ReplyUpsertWithWhereUniqueWithoutReplyInput], {nullable:true})
    @Type(() => ReplyUpsertWithWhereUniqueWithoutReplyInput)
    upsert?: Array<ReplyUpsertWithWhereUniqueWithoutReplyInput>;

    @Field(() => ReplyCreateManyReplyInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyReplyInputEnvelope)
    createMany?: ReplyCreateManyReplyInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;

    @Field(() => [ReplyUpdateWithWhereUniqueWithoutReplyInput], {nullable:true})
    @Type(() => ReplyUpdateWithWhereUniqueWithoutReplyInput)
    update?: Array<ReplyUpdateWithWhereUniqueWithoutReplyInput>;

    @Field(() => [ReplyUpdateManyWithWhereWithoutReplyInput], {nullable:true})
    @Type(() => ReplyUpdateManyWithWhereWithoutReplyInput)
    updateMany?: Array<ReplyUpdateManyWithWhereWithoutReplyInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    @Type(() => ReplyScalarWhereInput)
    deleteMany?: Array<ReplyScalarWhereInput>;
}
