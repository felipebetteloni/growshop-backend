import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReplyCount {

    @Field(() => Int, {nullable:false})
    replies?: number;
}
