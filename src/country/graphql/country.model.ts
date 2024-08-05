import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { State } from '../state/state.model';
import { Product } from '../product/product.model';
import { CountryCount } from './country-count.output';

@ObjectType()
export class Country {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [State], {nullable:true})
    states?: Array<State>;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => CountryCount, {nullable:false})
    _count?: CountryCount;
}
