import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFavoritesInput } from '../user/user-create-nested-one-without-favorites.input';
import { ProductCreateNestedOneWithoutFavoritesInput } from '../product/product-create-nested-one-without-favorites.input';

@InputType()
export class FavoriteCreateInput {

    @Field(() => UserCreateNestedOneWithoutFavoritesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutFavoritesInput;

    @Field(() => ProductCreateNestedOneWithoutFavoritesInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutFavoritesInput;
}
