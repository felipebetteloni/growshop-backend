import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereInput } from './reply-where.input';
import { Type } from 'class-transformer';
import { ReplyUpdateWithoutRepliesInput } from './reply-update-without-replies.input';

@InputType()
export class ReplyUpdateToOneWithWhereWithoutRepliesInput {

    @Field(() => ReplyWhereInput, {nullable:true})
    @Type(() => ReplyWhereInput)
    where?: ReplyWhereInput;

    @Field(() => ReplyUpdateWithoutRepliesInput, {nullable:false})
    @Type(() => ReplyUpdateWithoutRepliesInput)
    data!: ReplyUpdateWithoutRepliesInput;
}
