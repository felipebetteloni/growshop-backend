import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateManyUserInput } from './reply-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReplyCreateManyUserInputEnvelope {

    @Field(() => [ReplyCreateManyUserInput], {nullable:false})
    @Type(() => ReplyCreateManyUserInput)
    data!: Array<ReplyCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
