import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSub_categoryInput } from './product-create-without-sub-category.input';

@InputType()
export class ProductCreateOrConnectWithoutSub_categoryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutSub_categoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutSub_categoryInput)
    create!: ProductCreateWithoutSub_categoryInput;
}
