import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductImgScalarWhereWithAggregatesInput {

    @Field(() => [ProductImgScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductImgScalarWhereWithAggregatesInput>;

    @Field(() => [ProductImgScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductImgScalarWhereWithAggregatesInput>;

    @Field(() => [ProductImgScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductImgScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imgUrl?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;
}
