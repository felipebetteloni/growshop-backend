import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StateRelationFilter } from '../../state/state-relation-filter.input';
import { NeighbourhoodListRelationFilter } from '../../neighbourhood/neighbourhood-list-relation-filter.input';
import { ProductListRelationFilter } from '../../product/product-list-relation-filter.input';

@InputType()
export class CityWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CityWhereInput], {nullable:true})
    AND?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    OR?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    NOT?: Array<CityWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    stateId?: StringFilter;

    @Field(() => StateRelationFilter, {nullable:true})
    state?: StateRelationFilter;

    @Field(() => NeighbourhoodListRelationFilter, {nullable:true})
    neighbourhood?: NeighbourhoodListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}
