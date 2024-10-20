import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StateCount {

    @Field(() => Int, {nullable:false})
    cities?: number;

    @Field(() => Int, {nullable:false})
    products?: number;
}
