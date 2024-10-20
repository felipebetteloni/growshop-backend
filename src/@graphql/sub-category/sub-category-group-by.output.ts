import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubCategoryCountAggregate } from './sub-category-count-aggregate.output';
import { SubCategoryMinAggregate } from './sub-category-min-aggregate.output';
import { SubCategoryMaxAggregate } from './sub-category-max-aggregate.output';

@ObjectType()
export class SubCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => SubCategoryCountAggregate, {nullable:true})
    _count?: SubCategoryCountAggregate;

    @Field(() => SubCategoryMinAggregate, {nullable:true})
    _min?: SubCategoryMinAggregate;

    @Field(() => SubCategoryMaxAggregate, {nullable:true})
    _max?: SubCategoryMaxAggregate;
}
