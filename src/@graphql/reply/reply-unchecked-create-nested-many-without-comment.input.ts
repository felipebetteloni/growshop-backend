import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutCommentInput } from './reply-create-without-comment.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutCommentInput } from './reply-create-or-connect-without-comment.input';
import { ReplyCreateManyCommentInputEnvelope } from './reply-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyUncheckedCreateNestedManyWithoutCommentInput {

    @Field(() => [ReplyCreateWithoutCommentInput], {nullable:true})
    @Type(() => ReplyCreateWithoutCommentInput)
    create?: Array<ReplyCreateWithoutCommentInput>;

    @Field(() => [ReplyCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutCommentInput>;

    @Field(() => ReplyCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyCommentInputEnvelope)
    createMany?: ReplyCreateManyCommentInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;
}
