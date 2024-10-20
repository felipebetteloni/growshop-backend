import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutFavoritesInput } from './product-update-without-favorites.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutFavoritesInput } from './product-create-without-favorites.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutFavoritesInput {

    @Field(() => ProductUpdateWithoutFavoritesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutFavoritesInput)
    update!: ProductUpdateWithoutFavoritesInput;

    @Field(() => ProductCreateWithoutFavoritesInput, {nullable:false})
    @Type(() => ProductCreateWithoutFavoritesInput)
    create!: ProductCreateWithoutFavoritesInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
