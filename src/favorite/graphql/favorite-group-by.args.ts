import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FavoriteWhereInput } from './favorite-where.input';
import { Type } from 'class-transformer';
import { FavoriteOrderByWithAggregationInput } from './favorite-order-by-with-aggregation.input';
import { FavoriteScalarFieldEnum } from './favorite-scalar-field.enum';
import { FavoriteScalarWhereWithAggregatesInput } from './favorite-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FavoriteCountAggregateInput } from './favorite-count-aggregate.input';
import { FavoriteMinAggregateInput } from './favorite-min-aggregate.input';
import { FavoriteMaxAggregateInput } from './favorite-max-aggregate.input';

@ArgsType()
export class FavoriteGroupByArgs {

    @Field(() => FavoriteWhereInput, {nullable:true})
    @Type(() => FavoriteWhereInput)
    where?: FavoriteWhereInput;

    @Field(() => [FavoriteOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FavoriteOrderByWithAggregationInput>;

    @Field(() => [FavoriteScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FavoriteScalarFieldEnum>;

    @Field(() => FavoriteScalarWhereWithAggregatesInput, {nullable:true})
    having?: FavoriteScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FavoriteCountAggregateInput, {nullable:true})
    _count?: FavoriteCountAggregateInput;

    @Field(() => FavoriteMinAggregateInput, {nullable:true})
    _min?: FavoriteMinAggregateInput;

    @Field(() => FavoriteMaxAggregateInput, {nullable:true})
    _max?: FavoriteMaxAggregateInput;
}
