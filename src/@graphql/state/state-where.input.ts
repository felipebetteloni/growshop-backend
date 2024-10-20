import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { CountryRelationFilter } from '../country/country-relation-filter.input';
import { CityListRelationFilter } from '../city/city-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class StateWhereInput {

    @Field(() => [StateWhereInput], {nullable:true})
    AND?: Array<StateWhereInput>;

    @Field(() => [StateWhereInput], {nullable:true})
    OR?: Array<StateWhereInput>;

    @Field(() => [StateWhereInput], {nullable:true})
    NOT?: Array<StateWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    countryId?: StringFilter;

    @Field(() => CountryRelationFilter, {nullable:true})
    country?: CountryRelationFilter;

    @Field(() => CityListRelationFilter, {nullable:true})
    cities?: CityListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}
