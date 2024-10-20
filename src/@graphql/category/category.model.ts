import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { SubCategory } from '../sub-category/sub-category.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [Product], {nullable:true})
    Product?: Array<Product>;

    @Field(() => [SubCategory], {nullable:true})
    SubCategory?: Array<SubCategory>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
