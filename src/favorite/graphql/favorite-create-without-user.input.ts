import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutFavoritesInput } from '../../product/product-create-nested-one-without-favorites.input';

@InputType()
export class FavoriteCreateWithoutUserInput {

    @Field(() => ProductCreateNestedOneWithoutFavoritesInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutFavoritesInput;
}
