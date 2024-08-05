import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { City } from '../city/city.model';
import { Product } from '../product/product.model';
import { NeighbourhoodCount } from './neighbourhood-count.output';

@ObjectType()
export class Neighbourhood {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    cityId!: string;

    @Field(() => City, {nullable:false})
    city?: City;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => NeighbourhoodCount, {nullable:false})
    _count?: NeighbourhoodCount;
}
