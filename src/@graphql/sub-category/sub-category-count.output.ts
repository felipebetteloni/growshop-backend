import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubCategoryCount {

    @Field(() => Int, {nullable:false})
    Product?: number;
}
