import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutRepliesInput } from './reply-create-without-replies.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutRepliesInput } from './reply-create-or-connect-without-replies.input';
import { ReplyUpsertWithoutRepliesInput } from './reply-upsert-without-replies.input';
import { ReplyWhereInput } from './reply-where.input';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateToOneWithWhereWithoutRepliesInput } from './reply-update-to-one-with-where-without-replies.input';

@InputType()
export class ReplyUpdateOneWithoutRepliesNestedInput {

    @Field(() => ReplyCreateWithoutRepliesInput, {nullable:true})
    @Type(() => ReplyCreateWithoutRepliesInput)
    create?: ReplyCreateWithoutRepliesInput;

    @Field(() => ReplyCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: ReplyCreateOrConnectWithoutRepliesInput;

    @Field(() => ReplyUpsertWithoutRepliesInput, {nullable:true})
    @Type(() => ReplyUpsertWithoutRepliesInput)
    upsert?: ReplyUpsertWithoutRepliesInput;

    @Field(() => ReplyWhereInput, {nullable:true})
    @Type(() => ReplyWhereInput)
    disconnect?: ReplyWhereInput;

    @Field(() => ReplyWhereInput, {nullable:true})
    @Type(() => ReplyWhereInput)
    delete?: ReplyWhereInput;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>;

    @Field(() => ReplyUpdateToOneWithWhereWithoutRepliesInput, {nullable:true})
    @Type(() => ReplyUpdateToOneWithWhereWithoutRepliesInput)
    update?: ReplyUpdateToOneWithWhereWithoutRepliesInput;
}
