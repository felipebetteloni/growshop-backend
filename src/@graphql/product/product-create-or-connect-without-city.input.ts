import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCityInput } from './product-create-without-city.input';

@InputType()
export class ProductCreateOrConnectWithoutCityInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutCityInput, {nullable:false})
    @Type(() => ProductCreateWithoutCityInput)
    create!: ProductCreateWithoutCityInput;
}
