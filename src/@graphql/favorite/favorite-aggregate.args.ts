import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FavoriteWhereInput } from './favorite-where.input';
import { Type } from 'class-transformer';
import { FavoriteOrderByWithRelationInput } from './favorite-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FavoriteWhereUniqueInput } from './favorite-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FavoriteCountAggregateInput } from './favorite-count-aggregate.input';
import { FavoriteMinAggregateInput } from './favorite-min-aggregate.input';
import { FavoriteMaxAggregateInput } from './favorite-max-aggregate.input';

@ArgsType()
export class FavoriteAggregateArgs {

    @Field(() => FavoriteWhereInput, {nullable:true})
    @Type(() => FavoriteWhereInput)
    where?: FavoriteWhereInput;

    @Field(() => [FavoriteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FavoriteOrderByWithRelationInput>;

    @Field(() => FavoriteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FavoriteWhereUniqueInput, 'userId_productId'>;

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
