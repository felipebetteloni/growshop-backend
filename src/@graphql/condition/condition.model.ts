import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { ConditionCount } from './condition-count.output';

@ObjectType()
export class Condition {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => ConditionCount, {nullable:false})
    _count?: ConditionCount;
}
