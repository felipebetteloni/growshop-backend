import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';
import { Type } from 'class-transformer';
import { CityOrderByWithRelationInput } from './city-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CityCountAggregateInput } from './city-count-aggregate.input';
import { CityMinAggregateInput } from './city-min-aggregate.input';
import { CityMaxAggregateInput } from './city-max-aggregate.input';

@ArgsType()
export class CityAggregateArgs {

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    where?: CityWhereInput;

    @Field(() => [CityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithRelationInput>;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CityCountAggregateInput, {nullable:true})
    _count?: CityCountAggregateInput;

    @Field(() => CityMinAggregateInput, {nullable:true})
    _min?: CityMinAggregateInput;

    @Field(() => CityMaxAggregateInput, {nullable:true})
    _max?: CityMaxAggregateInput;
}
