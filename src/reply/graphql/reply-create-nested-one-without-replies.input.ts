import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutRepliesInput } from './reply-create-without-replies.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutRepliesInput } from './reply-create-or-connect-without-replies.input';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyCreateNestedOneWithoutRepliesInput {

    @Field(() => ReplyCreateWithoutRepliesInput, {nullable:true})
    @Type(() => ReplyCreateWithoutRepliesInput)
    create?: ReplyCreateWithoutRepliesInput;

    @Field(() => ReplyCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: ReplyCreateOrConnectWithoutRepliesInput;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>;
}
