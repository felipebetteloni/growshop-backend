import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Category } from '../category/category.model';
import { Product } from '../product/product.model';
import { SubCategoryCount } from './sub-category-count.output';

@ObjectType()
export class SubCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Category, {nullable:false})
    category?: Category;

    @Field(() => [Product], {nullable:true})
    Product?: Array<Product>;

    @Field(() => SubCategoryCount, {nullable:false})
    _count?: SubCategoryCount;
}
