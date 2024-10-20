import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubCategoryWhereInput } from './sub-category-where.input';
import { Type } from 'class-transformer';
import { SubCategoryOrderByWithAggregationInput } from './sub-category-order-by-with-aggregation.input';
import { SubCategoryScalarFieldEnum } from './sub-category-scalar-field.enum';
import { SubCategoryScalarWhereWithAggregatesInput } from './sub-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubCategoryCountAggregateInput } from './sub-category-count-aggregate.input';
import { SubCategoryMinAggregateInput } from './sub-category-min-aggregate.input';
import { SubCategoryMaxAggregateInput } from './sub-category-max-aggregate.input';

@ArgsType()
export class SubCategoryGroupByArgs {

    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    where?: SubCategoryWhereInput;

    @Field(() => [SubCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubCategoryOrderByWithAggregationInput>;

    @Field(() => [SubCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubCategoryScalarFieldEnum>;

    @Field(() => SubCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubCategoryCountAggregateInput, {nullable:true})
    _count?: SubCategoryCountAggregateInput;

    @Field(() => SubCategoryMinAggregateInput, {nullable:true})
    _min?: SubCategoryMinAggregateInput;

    @Field(() => SubCategoryMaxAggregateInput, {nullable:true})
    _max?: SubCategoryMaxAggregateInput;
}
