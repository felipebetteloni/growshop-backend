import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSub_categoryInput } from './product-update-without-sub-category.input';
import { ProductCreateWithoutSub_categoryInput } from './product-create-without-sub-category.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutSub_categoryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutSub_categoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSub_categoryInput)
    update!: ProductUpdateWithoutSub_categoryInput;

    @Field(() => ProductCreateWithoutSub_categoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutSub_categoryInput)
    create!: ProductCreateWithoutSub_categoryInput;
}
