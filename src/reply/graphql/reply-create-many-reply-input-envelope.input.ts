import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateManyReplyInput } from './reply-create-many-reply.input';
import { Type } from 'class-transformer';

@InputType()
export class ReplyCreateManyReplyInputEnvelope {

    @Field(() => [ReplyCreateManyReplyInput], {nullable:false})
    @Type(() => ReplyCreateManyReplyInput)
    data!: Array<ReplyCreateManyReplyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
