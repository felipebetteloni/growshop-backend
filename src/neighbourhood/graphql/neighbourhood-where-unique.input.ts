import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodWhereInput } from './neighbourhood-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CityRelationFilter } from '../city/city-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class NeighbourhoodWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [NeighbourhoodWhereInput], {nullable:true})
    AND?: Array<NeighbourhoodWhereInput>;

    @Field(() => [NeighbourhoodWhereInput], {nullable:true})
    OR?: Array<NeighbourhoodWhereInput>;

    @Field(() => [NeighbourhoodWhereInput], {nullable:true})
    NOT?: Array<NeighbourhoodWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cityId?: StringFilter;

    @Field(() => CityRelationFilter, {nullable:true})
    city?: CityRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}
