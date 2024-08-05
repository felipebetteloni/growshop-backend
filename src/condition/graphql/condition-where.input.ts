import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class ConditionWhereInput {

    @Field(() => [ConditionWhereInput], {nullable:true})
    AND?: Array<ConditionWhereInput>;

    @Field(() => [ConditionWhereInput], {nullable:true})
    OR?: Array<ConditionWhereInput>;

    @Field(() => [ConditionWhereInput], {nullable:true})
    NOT?: Array<ConditionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}
