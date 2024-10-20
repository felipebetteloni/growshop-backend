import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { State } from '../state/state.model';
import { Neighbourhood } from '../neighbourhood/neighbourhood.model';
import { Product } from '../product/product.model';
import { CityCount } from './city-count.output';

@ObjectType()
export class City {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    stateId!: string;

    @Field(() => State, {nullable:false})
    state?: State;

    @Field(() => [Neighbourhood], {nullable:true})
    neighbourhood?: Array<Neighbourhood>;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => CityCount, {nullable:false})
    _count?: CityCount;
}
