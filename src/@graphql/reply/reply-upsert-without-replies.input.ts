import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyUpdateWithoutRepliesInput } from './reply-update-without-replies.input';
import { Type } from 'class-transformer';
import { ReplyCreateWithoutRepliesInput } from './reply-create-without-replies.input';
import { ReplyWhereInput } from './reply-where.input';

@InputType()
export class ReplyUpsertWithoutRepliesInput {

    @Field(() => ReplyUpdateWithoutRepliesInput, {nullable:false})
    @Type(() => ReplyUpdateWithoutRepliesInput)
    update!: ReplyUpdateWithoutRepliesInput;

    @Field(() => ReplyCreateWithoutRepliesInput, {nullable:false})
    @Type(() => ReplyCreateWithoutRepliesInput)
    create!: ReplyCreateWithoutRepliesInput;

    @Field(() => ReplyWhereInput, {nullable:true})
    @Type(() => ReplyWhereInput)
    where?: ReplyWhereInput;
}
