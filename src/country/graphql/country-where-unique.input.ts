import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StateListRelationFilter } from '../state/state-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class CountryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CountryWhereInput], {nullable:true})
    AND?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    OR?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    NOT?: Array<CountryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StateListRelationFilter, {nullable:true})
    states?: StateListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}
