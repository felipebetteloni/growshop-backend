import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutCommentInput } from './reply-create-without-comment.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutCommentInput } from './reply-create-or-connect-without-comment.input';
import { ReplyUpsertWithWhereUniqueWithoutCommentInput } from './reply-upsert-with-where-unique-without-comment.input';
import { ReplyCreateManyCommentInputEnvelope } from './reply-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithWhereUniqueWithoutCommentInput } from './reply-update-with-where-unique-without-comment.input';
import { ReplyUpdateManyWithWhereWithoutCommentInput } from './reply-update-many-with-where-without-comment.input';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';

@InputType()
export class ReplyUpdateManyWithoutCommentNestedInput {

    @Field(() => [ReplyCreateWithoutCommentInput], {nullable:true})
    @Type(() => ReplyCreateWithoutCommentInput)
    create?: Array<ReplyCreateWithoutCommentInput>;

    @Field(() => [ReplyCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutCommentInput>;

    @Field(() => [ReplyUpsertWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => ReplyUpsertWithWhereUniqueWithoutCommentInput)
    upsert?: Array<ReplyUpsertWithWhereUniqueWithoutCommentInput>;

    @Field(() => ReplyCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyCommentInputEnvelope)
    createMany?: ReplyCreateManyCommentInputEnvelope;

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

    @Field(() => [ReplyUpdateWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => ReplyUpdateWithWhereUniqueWithoutCommentInput)
    update?: Array<ReplyUpdateWithWhereUniqueWithoutCommentInput>;

    @Field(() => [ReplyUpdateManyWithWhereWithoutCommentInput], {nullable:true})
    @Type(() => ReplyUpdateManyWithWhereWithoutCommentInput)
    updateMany?: Array<ReplyUpdateManyWithWhereWithoutCommentInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    @Type(() => ReplyScalarWhereInput)
    deleteMany?: Array<ReplyScalarWhereInput>;
}
