import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImgWhereInput } from './product-img-where.input';
import { Type } from 'class-transformer';
import { ProductImgOrderByWithAggregationInput } from './product-img-order-by-with-aggregation.input';
import { ProductImgScalarFieldEnum } from './product-img-scalar-field.enum';
import { ProductImgScalarWhereWithAggregatesInput } from './product-img-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductImgCountAggregateInput } from './product-img-count-aggregate.input';
import { ProductImgMinAggregateInput } from './product-img-min-aggregate.input';
import { ProductImgMaxAggregateInput } from './product-img-max-aggregate.input';

@ArgsType()
export class ProductImgGroupByArgs {

    @Field(() => ProductImgWhereInput, {nullable:true})
    @Type(() => ProductImgWhereInput)
    where?: ProductImgWhereInput;

    @Field(() => [ProductImgOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductImgOrderByWithAggregationInput>;

    @Field(() => [ProductImgScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductImgScalarFieldEnum>;

    @Field(() => ProductImgScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductImgScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductImgCountAggregateInput, {nullable:true})
    _count?: ProductImgCountAggregateInput;

    @Field(() => ProductImgMinAggregateInput, {nullable:true})
    _min?: ProductImgMinAggregateInput;

    @Field(() => ProductImgMaxAggregateInput, {nullable:true})
    _max?: ProductImgMaxAggregateInput;
}
