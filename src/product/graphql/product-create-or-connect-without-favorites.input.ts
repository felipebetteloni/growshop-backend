import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutFavoritesInput } from './product-create-without-favorites.input';

@InputType()
export class ProductCreateOrConnectWithoutFavoritesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutFavoritesInput, {nullable:false})
    @Type(() => ProductCreateWithoutFavoritesInput)
    create!: ProductCreateWithoutFavoritesInput;
}
