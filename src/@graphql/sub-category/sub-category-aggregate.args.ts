import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubCategoryWhereInput } from './sub-category-where.input';
import { Type } from 'class-transformer';
import { SubCategoryOrderByWithRelationInput } from './sub-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubCategoryCountAggregateInput } from './sub-category-count-aggregate.input';
import { SubCategoryMinAggregateInput } from './sub-category-min-aggregate.input';
import { SubCategoryMaxAggregateInput } from './sub-category-max-aggregate.input';

@ArgsType()
export class SubCategoryAggregateArgs {

    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    where?: SubCategoryWhereInput;

    @Field(() => [SubCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubCategoryOrderByWithRelationInput>;

    @Field(() => SubCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

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
