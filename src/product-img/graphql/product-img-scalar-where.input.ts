import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductImgScalarWhereInput {

    @Field(() => [ProductImgScalarWhereInput], {nullable:true})
    AND?: Array<ProductImgScalarWhereInput>;

    @Field(() => [ProductImgScalarWhereInput], {nullable:true})
    OR?: Array<ProductImgScalarWhereInput>;

    @Field(() => [ProductImgScalarWhereInput], {nullable:true})
    NOT?: Array<ProductImgScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imgUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;
}
