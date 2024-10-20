import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class FavoriteScalarWhereWithAggregatesInput {

    @Field(() => [FavoriteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FavoriteScalarWhereWithAggregatesInput>;

    @Field(() => [FavoriteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FavoriteScalarWhereWithAggregatesInput>;

    @Field(() => [FavoriteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FavoriteScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;
}
