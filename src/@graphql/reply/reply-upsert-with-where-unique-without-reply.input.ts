import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyUpdateWithoutReplyInput } from './reply-update-without-reply.input';
import { ReplyCreateWithoutReplyInput } from './reply-create-without-reply.input';

@InputType()
export class ReplyUpsertWithWhereUniqueWithoutReplyInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>;

    @Field(() => ReplyUpdateWithoutReplyInput, {nullable:false})
    @Type(() => ReplyUpdateWithoutReplyInput)
    update!: ReplyUpdateWithoutReplyInput;

    @Field(() => ReplyCreateWithoutReplyInput, {nullable:false})
    @Type(() => ReplyCreateWithoutReplyInput)
    create!: ReplyCreateWithoutReplyInput;
}
