import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReportCountAggregate {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    productId!: number;

    @Field(() => Int, {nullable:false})
    text!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
