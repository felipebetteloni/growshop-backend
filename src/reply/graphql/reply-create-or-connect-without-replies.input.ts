import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyCreateWithoutRepliesInput } from './reply-create-without-replies.input';

@InputType()
export class ReplyCreateOrConnectWithoutRepliesInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>;

    @Field(() => ReplyCreateWithoutRepliesInput, {nullable:false})
    @Type(() => ReplyCreateWithoutRepliesInput)
    create!: ReplyCreateWithoutRepliesInput;
}
