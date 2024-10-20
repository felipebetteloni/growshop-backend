import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyCreateWithoutCommentInput } from './reply-create-without-comment.input';

@InputType()
export class ReplyCreateOrConnectWithoutCommentInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>;

    @Field(() => ReplyCreateWithoutCommentInput, {nullable:false})
    @Type(() => ReplyCreateWithoutCommentInput)
    create!: ReplyCreateWithoutCommentInput;
}
