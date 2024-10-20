import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Country } from '../country/country.model';
import { City } from '../city/city.model';
import { Product } from '../product/product.model';
import { StateCount } from './state-count.output';

@ObjectType()
export class State {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    countryId!: string;

    @Field(() => Country, {nullable:false})
    country?: Country;

    @Field(() => [City], {nullable:true})
    cities?: Array<City>;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => StateCount, {nullable:false})
    _count?: StateCount;
}
