import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutFavoritesInput } from './product-create-without-favorites.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutFavoritesInput } from './product-create-or-connect-without-favorites.input';
import { ProductUpsertWithoutFavoritesInput } from './product-upsert-without-favorites.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutFavoritesInput } from './product-update-to-one-with-where-without-favorites.input';

@InputType()
export class ProductUpdateOneRequiredWithoutFavoritesNestedInput {

    @Field(() => ProductCreateWithoutFavoritesInput, {nullable:true})
    @Type(() => ProductCreateWithoutFavoritesInput)
    create?: ProductCreateWithoutFavoritesInput;

    @Field(() => ProductCreateOrConnectWithoutFavoritesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutFavoritesInput)
    connectOrCreate?: ProductCreateOrConnectWithoutFavoritesInput;

    @Field(() => ProductUpsertWithoutFavoritesInput, {nullable:true})
    @Type(() => ProductUpsertWithoutFavoritesInput)
    upsert?: ProductUpsertWithoutFavoritesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutFavoritesInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutFavoritesInput)
    update?: ProductUpdateToOneWithWhereWithoutFavoritesInput;
}
