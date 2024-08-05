import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutFavoritesNestedInput } from '../user/user-update-one-required-without-favorites-nested.input';
import { ProductUpdateOneRequiredWithoutFavoritesNestedInput } from '../product/product-update-one-required-without-favorites-nested.input';

@InputType()
export class FavoriteUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutFavoritesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutFavoritesNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutFavoritesNestedInput;
}
