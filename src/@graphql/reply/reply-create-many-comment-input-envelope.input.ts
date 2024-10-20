import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateManyCommentInput } from './reply-create-many-comment.input';
import { Type } from 'class-transformer';

@InputType()
export class ReplyCreateManyCommentInputEnvelope {

    @Field(() => [ReplyCreateManyCommentInput], {nullable:false})
    @Type(() => ReplyCreateManyCommentInput)
    data!: Array<ReplyCreateManyCommentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
