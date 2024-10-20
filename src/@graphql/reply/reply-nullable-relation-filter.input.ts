import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereInput } from './reply-where.input';

@InputType()
export class ReplyNullableRelationFilter {

    @Field(() => ReplyWhereInput, {nullable:true})
    is?: ReplyWhereInput;

    @Field(() => ReplyWhereInput, {nullable:true})
    isNot?: ReplyWhereInput;
}
