import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShareWhereInput } from './share-where.input';
import { Type } from 'class-transformer';
import { ShareOrderByWithAggregationInput } from './share-order-by-with-aggregation.input';
import { ShareScalarFieldEnum } from './share-scalar-field.enum';
import { ShareScalarWhereWithAggregatesInput } from './share-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShareCountAggregateInput } from './share-count-aggregate.input';
import { ShareMinAggregateInput } from './share-min-aggregate.input';
import { ShareMaxAggregateInput } from './share-max-aggregate.input';

@ArgsType()
export class ShareGroupByArgs {

    @Field(() => ShareWhereInput, {nullable:true})
    @Type(() => ShareWhereInput)
    where?: ShareWhereInput;

    @Field(() => [ShareOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShareOrderByWithAggregationInput>;

    @Field(() => [ShareScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShareScalarFieldEnum>;

    @Field(() => ShareScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShareScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShareCountAggregateInput, {nullable:true})
    _count?: ShareCountAggregateInput;

    @Field(() => ShareMinAggregateInput, {nullable:true})
    _min?: ShareMinAggregateInput;

    @Field(() => ShareMaxAggregateInput, {nullable:true})
    _max?: ShareMaxAggregateInput;
}
