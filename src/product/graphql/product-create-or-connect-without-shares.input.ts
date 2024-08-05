import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSharesInput } from './product-create-without-shares.input';

@InputType()
export class ProductCreateOrConnectWithoutSharesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutSharesInput, {nullable:false})
    @Type(() => ProductCreateWithoutSharesInput)
    create!: ProductCreateWithoutSharesInput;
}
