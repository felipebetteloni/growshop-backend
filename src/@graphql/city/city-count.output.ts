import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CityCount {

    @Field(() => Int, {nullable:false})
    neighbourhood?: number;

    @Field(() => Int, {nullable:false})
    products?: number;
}
