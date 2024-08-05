import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyUpdateWithoutCommentInput } from './reply-update-without-comment.input';

@InputType()
export class ReplyUpdateWithWhereUniqueWithoutCommentInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>;

    @Field(() => ReplyUpdateWithoutCommentInput, {nullable:false})
    @Type(() => ReplyUpdateWithoutCommentInput)
    data!: ReplyUpdateWithoutCommentInput;
}
