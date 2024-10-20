import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutFavoritesInput } from './product-update-without-favorites.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutFavoritesInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutFavoritesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutFavoritesInput)
    data!: ProductUpdateWithoutFavoritesInput;
}
