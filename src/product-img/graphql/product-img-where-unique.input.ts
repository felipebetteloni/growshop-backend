import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImgWhereInput } from './product-img-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class ProductImgWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProductImgWhereInput], {nullable:true})
    AND?: Array<ProductImgWhereInput>;

    @Field(() => [ProductImgWhereInput], {nullable:true})
    OR?: Array<ProductImgWhereInput>;

    @Field(() => [ProductImgWhereInput], {nullable:true})
    NOT?: Array<ProductImgWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    imgUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;
}
