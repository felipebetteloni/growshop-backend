import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ShareScalarWhereWithAggregatesInput {

    @Field(() => [ShareScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShareScalarWhereWithAggregatesInput>;

    @Field(() => [ShareScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShareScalarWhereWithAggregatesInput>;

    @Field(() => [ShareScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShareScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;
}
