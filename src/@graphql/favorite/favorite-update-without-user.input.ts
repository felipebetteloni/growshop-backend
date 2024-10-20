import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutFavoritesNestedInput } from '../product/product-update-one-required-without-favorites-nested.input';

@InputType()
export class FavoriteUpdateWithoutUserInput {

    @Field(() => ProductUpdateOneRequiredWithoutFavoritesNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutFavoritesNestedInput;
}
